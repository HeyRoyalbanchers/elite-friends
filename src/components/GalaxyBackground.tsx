import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Full-page spiral galaxy background, inspired by the three.js example:
 * https://github.com/mrdoob/three.js/blob/master/examples/webgpu_tsl_galaxy.html
 *
 * Two layers on the black theme:
 *  1. A small, distant spiral galaxy near the top of the screen (tsl_galaxy).
 *  2. A site-wide wave grid of dots (webgl_points_waves) flowing below.
 * Time-based animation; scrolling down zooms the camera toward the galaxy.
 */
export function GalaxyBackground() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    const COUNT = isMobile ? 20000 : 60000;
    const STARS = isMobile ? 700 : 1500;
    const RADIUS = 7.6;
    const BRANCHES = 4;
    const SPIN = 1.35;
    const RANDOMNESS = 0.34;
    const RANDOMNESS_POWER = 3.1;
    const INSIDE_COLOR = new THREE.Color("#c0a8ff");
    const OUTSIDE_COLOR = new THREE.Color("#2b4fd8");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 120);
    camera.position.set(0, 1.7, 5.6);
    camera.lookAt(0, 1.9, -10);

    const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.35 : 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x05050a, 1);
    host.appendChild(renderer.domElement);

    // Galaxy sits small, high and far away so it reads as a distant galaxy.
    const galaxyGroup = new THREE.Group();
    galaxyGroup.position.set(0, 5.1, -20);
    galaxyGroup.scale.setScalar(0.42);
    scene.add(galaxyGroup);

    // ---- Spiral galaxy ------------------------------------------------------
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const scales = new Float32Array(COUNT);
    const radii = new Float32Array(COUNT);
    const angles = new Float32Array(COUNT);
    const randomness = new Float32Array(COUNT * 3);
    const tempColor = new THREE.Color();

    for (let i = 0; i < COUNT; i += 1) {
      const radius = Math.pow(Math.random(), 1.55) * RADIUS;
      const branchAngle = ((i % BRANCHES) / BRANCHES) * Math.PI * 2;
      radii[i] = radius;
      angles[i] = branchAngle + radius * SPIN;

      const spread = RANDOMNESS * radius * 0.32;
      randomness[i * 3] = Math.pow(Math.random(), RANDOMNESS_POWER) * (Math.random() < 0.5 ? 1 : -1) * spread;
      randomness[i * 3 + 1] = Math.pow(Math.random(), RANDOMNESS_POWER) * (Math.random() < 0.5 ? 1 : -1) * RANDOMNESS * 0.42 * (1.7 - radius / RADIUS);
      randomness[i * 3 + 2] = Math.pow(Math.random(), RANDOMNESS_POWER) * (Math.random() < 0.5 ? 1 : -1) * spread;

      tempColor.copy(INSIDE_COLOR).lerp(OUTSIDE_COLOR, radius / RADIUS);
      colors[i * 3] = tempColor.r;
      colors[i * 3 + 1] = tempColor.g;
      colors[i * 3 + 2] = tempColor.b;
      scales[i] = 0.55 + Math.random() * 0.9;
    }

    const galaxyGeometry = new THREE.BufferGeometry();
    galaxyGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    galaxyGeometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
    galaxyGeometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    galaxyGeometry.setAttribute("aRadius", new THREE.BufferAttribute(radii, 1));
    galaxyGeometry.setAttribute("aAngle", new THREE.BufferAttribute(angles, 1));
    galaxyGeometry.setAttribute("aRandom", new THREE.BufferAttribute(randomness, 3));

    const galaxyMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: isMobile ? 34 : 30 },
      },
      vertexShader: /* glsl */ `
        uniform float uTime;
        uniform float uSize;
        attribute float aScale;
        attribute float aRadius;
        attribute float aAngle;
        attribute vec3 aRandom;
        attribute vec3 aColor;
        varying vec3 vColor;
        varying float vTwinkle;

        void main() {
          // Differential rotation: the core spins faster than the rim.
          float angle = aAngle + uTime * (0.4 / (aRadius * 0.3 + 0.55));
          vec3 pos = vec3(
            cos(angle) * aRadius + aRandom.x,
            aRandom.y,
            sin(angle) * aRadius + aRandom.z
          );
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = uSize * aScale * (1.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
          vColor = aColor;
          vTwinkle = 0.72 + 0.28 * sin(uTime * 2.2 + aRadius * 9.0 + aAngle);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        varying float vTwinkle;

        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float glow = smoothstep(0.5, 0.0, d);
          glow = pow(glow, 2.4);
          gl_FragColor = vec4(vColor, glow * vTwinkle);
        }
      `,
    });
    const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
    galaxy.rotation.x = -0.42;
    galaxyGroup.add(galaxy);

    // ---- Ambient star field -------------------------------------------------
    const starPositions = new Float32Array(STARS * 3);
    const starColors = new Float32Array(STARS * 3);
    for (let i = 0; i < STARS; i += 1) {
      const r = 18 + Math.random() * 26;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.cos(phi) * 0.6;
      starPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      const tint = new THREE.Color().setHSL(0.62 + Math.random() * 0.16, 0.5, 0.72 + Math.random() * 0.25);
      starColors[i * 3] = tint.r;
      starColors[i * 3 + 1] = tint.g;
      starColors[i * 3 + 2] = tint.b;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
    const starMaterial = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // ---- Site-wide wave grid (webgl_points_waves) ----------------------------
    const GRID_X = isMobile ? 84 : 132;
    const GRID_Y = isMobile ? 46 : 72;
    const GRID_SEP = 0.42;
    const gridCount = GRID_X * GRID_Y;
    const gridPositions = new Float32Array(gridCount * 3);
    const gridColors = new Float32Array(gridCount * 3);
    const gridPalette = [new THREE.Color("#7258ee"), new THREE.Color("#3d98f1"), new THREE.Color("#63d8b0")];
    let gi = 0;
    for (let ix = 0; ix < GRID_X; ix += 1) {
      for (let iy = 0; iy < GRID_Y; iy += 1) {
        gridPositions[gi * 3] = ix * GRID_SEP - ((GRID_X * GRID_SEP) / 2);
        gridPositions[gi * 3 + 1] = 0;
        gridPositions[gi * 3 + 2] = iy * GRID_SEP - ((GRID_Y * GRID_SEP) / 2);
        const c = gridPalette[(ix + iy) % gridPalette.length];
        gridColors[gi * 3] = c.r;
        gridColors[gi * 3 + 1] = c.g;
        gridColors[gi * 3 + 2] = c.b;
        gi += 1;
      }
    }
    const gridGeometry = new THREE.BufferGeometry();
    gridGeometry.setAttribute("position", new THREE.BufferAttribute(gridPositions, 3));
    gridGeometry.setAttribute("aColor", new THREE.BufferAttribute(gridColors, 3));
    const gridMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: isMobile ? 1.0 : 1.25 },
        uOpacity: { value: 0.5 },
      },
      vertexShader: /* glsl */ `
        uniform float uTime;
        uniform float uSize;
        attribute vec3 aColor;
        varying vec3 vColor;
        varying float vShimmer;

        void main() {
          vec3 pos = position;
          pos.y += sin(pos.x * 0.28 + uTime) * 0.5 + sin(pos.z * 0.34 + uTime * 0.8) * 0.35;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = clamp(uSize * (120.0 / -mvPosition.z), 1.0, 5.0);
          gl_Position = projectionMatrix * mvPosition;
          vColor = aColor;
          vShimmer = 0.55 + 0.45 * sin(uTime * 1.5 + pos.x * 2.1 + pos.z * 1.7);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uOpacity;
        varying vec3 vColor;
        varying float vShimmer;

        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float glow = smoothstep(0.5, 0.08, d);
          gl_FragColor = vec4(vColor, glow * uOpacity * vShimmer);
        }
      `,
    });
    const waveGrid = new THREE.Points(gridGeometry, gridMaterial);
    waveGrid.position.set(0, -3, -12);
    scene.add(waveGrid);

    // ---- Scroll zoom state ---------------------------------------------------
    const state = { scroll: 0, scrollTarget: 0 };
    const maxScroll = () => Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const onScroll = () => {
      state.scrollTarget = Math.min(window.scrollY / maxScroll(), 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
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

    let time = 0;
    let frame = 0;
    let last = performance.now();
    const baseCamY = 1.7;
    const baseCamZ = 5.6;
    const animate = (now: number) => {
      const delta = Math.min((now - last) / 1000, 0.05);
      last = now;

      state.scroll += (state.scrollTarget - state.scroll) * 0.055;

      if (!reducedMotion) {
        time += delta * 0.6;
        galaxyMaterial.uniforms.uTime.value = time;
        gridMaterial.uniforms.uTime.value = time;
        stars.rotation.y = time * 0.01;

        // Scrolling down zooms the camera hard toward the distant galaxy.
        const zoom = state.scroll;
        camera.position.y = baseCamY + zoom * 2.2;
        camera.position.z = baseCamZ - zoom * 5.2;
        camera.lookAt(0, 1.9 + zoom * 2.1, -10);
        galaxyGroup.scale.setScalar(0.42 + zoom * 1.15);
      }

      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      galaxyGeometry.dispose();
      galaxyMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      gridGeometry.dispose();
      gridMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="galaxy-background" aria-hidden="true" />;
}
