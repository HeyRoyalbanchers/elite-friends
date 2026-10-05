import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Hero particle cloud inspired by the three.js example:
 * https://github.com/mrdoob/three.js/blob/master/examples/webgl_points_dynamic.html
 *
 * Positions are rewritten every frame: the cloud breathes and morphs between a
 * Fibonacci sphere and a torus knot, while the pointer tilts and sways it.
 */
export function HeroDynamicPoints() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 750 : 1500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 60);
    camera.position.set(0, 0.4, 9.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.4 : 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // -- Shapes: Fibonacci sphere and torus knot ------------------------------
    const spherePositions = new Float32Array(COUNT * 3);
    const knotPositions = new Float32Array(COUNT * 3);
    const phases = new Float32Array(COUNT);
    const golden = Math.PI * (3 - Math.sqrt(5));
    const knotP = 2;
    const knotQ = 3;
    for (let i = 0; i < COUNT; i += 1) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(1 - y * y, 0));
      const theta = golden * i;
      spherePositions[i * 3] = Math.cos(theta) * radiusAtY * 3.1;
      spherePositions[i * 3 + 1] = y * 3.1;
      spherePositions[i * 3 + 2] = Math.sin(theta) * radiusAtY * 3.1;

      const t = (i / COUNT) * Math.PI * 2;
      const r = Math.cos(knotQ * t) + 2;
      knotPositions[i * 3] = r * Math.cos(knotP * t) * 1.05;
      knotPositions[i * 3 + 1] = -Math.sin(knotQ * t) * 1.15;
      knotPositions[i * 3 + 2] = r * Math.sin(knotP * t) * 1.05;

      phases[i] = Math.random() * Math.PI * 2;
    }

    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const palette = [new THREE.Color("#7258ee"), new THREE.Color("#3d98f1"), new THREE.Color("#63d8b0"), new THREE.Color("#b18cff")];
    const tempColor = new THREE.Color();
    for (let i = 0; i < COUNT; i += 1) {
      tempColor.copy(palette[i % palette.length]).lerp(palette[(i * 3 + 1) % palette.length], 0.4);
      colors[i * 3] = tempColor.r;
      colors[i * 3 + 1] = tempColor.g;
      colors[i * 3 + 2] = tempColor.b;
    }

    const geometry = new THREE.BufferGeometry();
    const positionAttribute = new THREE.BufferAttribute(positions, 3);
    positionAttribute.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("position", positionAttribute);
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      sizeAttenuation: true,
      blending: THREE.NormalBlending,
    });
    const cloud = new THREE.Points(geometry, material);
    group.add(cloud);

    // Soft halo ring to tie the cloud into the hero layout.
    const haloMaterial = new THREE.MeshBasicMaterial({ color: "#8c52e5", transparent: true, opacity: 0.16 });
    const halo = new THREE.Mesh(new THREE.TorusGeometry(3.9, 0.012, 8, 120), haloMaterial);
    halo.rotation.x = Math.PI / 2.4;
    group.add(halo);

    const pointer = new THREE.Vector2();
    const onPointerMove = (event: PointerEvent) => {
      pointer.set((event.clientX / window.innerWidth - 0.5) * 2, (event.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      renderer.setSize(width, height, false);
      const scale = width < 640 ? 0.78 : 1;
      group.scale.setScalar(scale);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const a = new THREE.Vector3();
    const b = new THREE.Vector3();
    const clock = new THREE.Clock();
    let frame = 0;
    const animate = () => {
      const t = clock.getElapsedTime();
      // 0 -> 1 -> 0 morph cycle between sphere and knot.
      const raw = (Math.sin(t * 0.32) + 1) / 2;
      const morph = raw * raw * (3 - 2 * raw);

      for (let i = 0; i < COUNT; i += 1) {
        a.fromArray(spherePositions, i * 3);
        b.fromArray(knotPositions, i * 3);
        a.lerp(b, morph);
        const breathe = 1 + 0.07 * Math.sin(t * 1.35 + phases[i]);
        positions[i * 3] = a.x * breathe;
        positions[i * 3 + 1] = a.y * breathe;
        positions[i * 3 + 2] = a.z * breathe;
      }
      positionAttribute.needsUpdate = true;

      group.rotation.y += (pointer.x * 0.5 - group.rotation.y) * 0.04 + 0.0016;
      group.rotation.x += (pointer.y * 0.28 - group.rotation.x) * 0.04;
      halo.rotation.z = t * 0.22;
      haloMaterial.opacity = 0.12 + (Math.sin(t * 1.1) + 1) * 0.05;
      material.opacity = 0.72 + (Math.sin(t * 0.9) + 1) * 0.07;

      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      geometry.dispose();
      material.dispose();
      halo.geometry.dispose();
      haloMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="hero-dynamic-points" aria-hidden="true" />;
}
