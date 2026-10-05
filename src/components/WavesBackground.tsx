import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Full-page particle-wave background, adapted from the three.js example:
 * https://github.com/mrdoob/three.js/blob/master/examples/webgl_points_waves.html
 *
 * A large grid of points rises and falls with layered sine waves rendered in a
 * vertex shader. Scrolling the page drives the camera through the field and
 * boosts the wave amplitude, so the whole site feels alive as the visitor moves.
 */
export function WavesBackground() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    const AMOUNT_X = isMobile ? 56 : 96;
    const AMOUNT_Y = isMobile ? 34 : 58;
    const SEPARATION = 24;
    const NUM_PARTICLES = AMOUNT_X * AMOUNT_Y;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 1, 6000);
    camera.position.set(0, 320, 560);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.4 : 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    // ---- Particle grid ------------------------------------------------------
    const positions = new Float32Array(NUM_PARTICLES * 3);
    const colors = new Float32Array(NUM_PARTICLES * 3);
    const palette = [
      new THREE.Color("#7258ee"), // deep violet
      new THREE.Color("#8c52e5"), // orchid
      new THREE.Color("#3d98f1"), // sky
      new THREE.Color("#63d8b0"), // mint
    ];
    let i = 0;
    for (let ix = 0; ix < AMOUNT_X; ix += 1) {
      for (let iy = 0; iy < AMOUNT_Y; iy += 1) {
        positions[i * 3] = ix * SEPARATION - ((AMOUNT_X * SEPARATION) / 2);
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = iy * SEPARATION - ((AMOUNT_Y * SEPARATION) / 2);
        const color = palette[(ix + iy) % palette.length].clone().lerp(palette[(ix * 7 + iy * 3) % palette.length], 0.35);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
        i += 1;
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: 34 },
        uSize: { value: isMobile ? 3.4 : 4.2 },
        uOpacity: { value: 0.55 },
      },
      vertexShader: /* glsl */ `
        uniform float uTime;
        uniform float uAmplitude;
        uniform float uSize;
        attribute vec3 aColor;
        varying vec3 vColor;
        varying float vGlow;

        void main() {
          vec3 pos = position;
          float waveA = sin(pos.x * 0.045 + uTime) * uAmplitude;
          float waveB = sin(pos.z * 0.06 + uTime * 0.8) * uAmplitude * 0.62;
          float waveC = sin((pos.x + pos.z) * 0.022 + uTime * 1.35) * uAmplitude * 0.45;
          pos.y += waveA + waveB + waveC;
          vGlow = smoothstep(-uAmplitude, uAmplitude, waveA + waveB);

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = uSize * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
          vColor = aColor;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uOpacity;
        varying vec3 vColor;
        varying float vGlow;

        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float alpha = smoothstep(0.5, 0.12, d) * uOpacity * (0.55 + vGlow * 0.45);
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ---- Scroll + pointer state --------------------------------------------
    const state = {
      scroll: 0,
      scrollTarget: 0,
      pointerX: 0,
      pointerY: 0,
      pointerXTarget: 0,
      pointerYTarget: 0,
      time: Math.random() * 40,
      speed: 0.55,
    };
    const maxScroll = () => Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const onScroll = () => {
      state.scrollTarget = Math.min(window.scrollY / maxScroll(), 1);
    };
    const onPointerMove = (event: PointerEvent) => {
      state.pointerXTarget = (event.clientX / window.innerWidth - 0.5) * 2;
      state.pointerYTarget = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    onScroll();

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const baseCamY = 320;
    const baseCamZ = 560;
    let frame = 0;
    let last = performance.now();
    const animate = (now: number) => {
      const delta = Math.min((now - last) / 1000, 0.05);
      last = now;

      // Smooth scroll + pointer easing.
      state.scroll += (state.scrollTarget - state.scroll) * 0.045;
      state.pointerX += (state.pointerXTarget - state.pointerX) * 0.04;
      state.pointerY += (state.pointerYTarget - state.pointerY) * 0.04;

      if (!reducedMotion) {
        // Scrolling dives the camera through the wave field and lifts amplitude.
        state.speed = 0.55 + state.scrollTarget * 0.9;
        state.time += delta * state.speed;
        material.uniforms.uTime.value = state.time;
        material.uniforms.uAmplitude.value = 34 + state.scroll * 46;

        camera.position.x = state.pointerX * 60;
        camera.position.y = baseCamY - state.scroll * 150 + state.pointerY * -30;
        camera.position.z = baseCamZ - state.scroll * 240;
        camera.lookAt(state.pointerX * 18, state.scroll * 30, 0);
        points.rotation.y = state.pointerX * 0.06 + state.scroll * 0.35;
      }

      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="waves-background" aria-hidden="true" />;
}
