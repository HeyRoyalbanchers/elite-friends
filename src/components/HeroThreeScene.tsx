import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 900;

export function HeroThreeScene() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0, 9);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const palette = [new THREE.Color("#7258ee"), new THREE.Color("#3d98f1"), new THREE.Color("#63d8b0")];
    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const radius = 2.1 + Math.random() * 2.6;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 1.2;
      positions[i * 3 + 1] = Math.sin(angle) * radius * 0.6 + (Math.random() - 0.5) * 1.4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4.5;
      const color = palette[i % palette.length];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particleMaterial = new THREE.PointsMaterial({ size: 0.035, transparent: true, opacity: 0.52, vertexColors: true, depthWrite: false });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4.5, -0.8, 0), new THREE.Vector3(-2.8, 1.2, -0.7),
      new THREE.Vector3(-0.8, -0.4, 0.6), new THREE.Vector3(1.2, 1.1, -0.4),
      new THREE.Vector3(3.1, -0.7, 0.5), new THREE.Vector3(4.6, 0.5, 0),
    ]);
    const tubeMaterial = new THREE.MeshBasicMaterial({ color: "#8068ef", transparent: true, opacity: 0.3 });
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 160, 0.018, 6, false), tubeMaterial);
    group.add(tube);

    const crystalMaterial = new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.72, flatShading: true });
    const crystalGeometry = new THREE.IcosahedronGeometry(0.72, 1);
    const leftCrystal = new THREE.Mesh(crystalGeometry, crystalMaterial);
    const rightCrystal = new THREE.Mesh(crystalGeometry, crystalMaterial);
    leftCrystal.position.set(-3.65, 1.35, -0.2);
    rightCrystal.position.set(3.7, 0.55, -0.4);
    rightCrystal.scale.setScalar(0.72);
    group.add(leftCrystal, rightCrystal);

    const ringMaterial = new THREE.MeshBasicMaterial({ color: "#7258ee", transparent: true, opacity: 0.52 });
    const ringGeometry = new THREE.TorusGeometry(1.12, 0.025, 8, 96);
    const leftRing = new THREE.Mesh(ringGeometry, ringMaterial);
    leftRing.position.copy(leftCrystal.position);
    leftRing.rotation.x = 1.1;
    const rightRing = leftRing.clone();
    rightRing.position.copy(rightCrystal.position);
    rightRing.scale.setScalar(0.72);
    group.add(leftRing, rightRing);

    const beadMaterial = new THREE.MeshBasicMaterial({ color: "#25d8a2" });
    const beadGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const bead = new THREE.Mesh(beadGeometry, beadMaterial);
    group.add(bead);

    const cursor = new THREE.Vector2();
    const onPointerMove = (event: PointerEvent) => cursor.set((event.clientX / window.innerWidth - 0.5) * 2, (event.clientY / window.innerHeight - 0.5) * 2);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      renderer.setSize(width, height, false);
      group.scale.setScalar(width < 640 ? 0.72 : 1);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const clock = new THREE.Clock();
    let frame = 0;
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y += (cursor.x * 0.22 - group.rotation.y) * 0.035;
      group.rotation.x += (-cursor.y * 0.1 - group.rotation.x) * 0.035;
      particles.rotation.z = elapsed * 0.035;
      particles.position.y = Math.sin(elapsed * 0.6) * 0.12;
      leftCrystal.rotation.set(elapsed * 0.32, elapsed * 0.48, elapsed * 0.18);
      rightCrystal.rotation.set(-elapsed * 0.38, elapsed * 0.42, -elapsed * 0.22);
      leftRing.rotation.z = elapsed * 0.36;
      rightRing.rotation.z = -elapsed * 0.42;
      bead.position.copy(curve.getPoint((elapsed * 0.08) % 1));
      bead.scale.setScalar(0.8 + Math.sin(elapsed * 3) * 0.22);
      tubeMaterial.opacity = 0.55 + Math.sin(elapsed * 1.2) * 0.18;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      particleGeometry.dispose();
      particleMaterial.dispose();
      tube.geometry.dispose();
      tubeMaterial.dispose();
      crystalGeometry.dispose();
      crystalMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      beadGeometry.dispose();
      beadMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="hero-three-scene" aria-hidden="true" />;
}
