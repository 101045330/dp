import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PaperConfetti = () => {
  const scene = useRef(new THREE.Scene());
  const camera = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
  const renderer = useRef(new THREE.WebGLRenderer({ antialias: true, alpha: true }));
  const confetti = useRef(null);

  useEffect(() => {
    const currentRenderer = renderer.current;
    currentRenderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(currentRenderer.domElement);
    currentRenderer.domElement.style.position = 'fixed'; // Ensure it stays on top
    currentRenderer.domElement.style.top = '0';
    currentRenderer.domElement.style.left = '0';
    currentRenderer.domElement.style.zIndex = '10'; // Ensure it's above other content
    currentRenderer.setClearColor(0x000000, 0); // Make the background transparent

    const currentScene = scene.current;
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const velocities = [];
    const colors = [];
    const numParticles = 500;
    for (let i = 0; i < numParticles; i++) {
      const x = THREE.MathUtils.randFloatSpread(20);
      const y = THREE.MathUtils.randFloatSpread(20);
      const z = THREE.MathUtils.randFloatSpread(20);
      vertices.push(x, y, z);

      const vx = THREE.MathUtils.randFloat(-0.1, 0.1); // Add horizontal velocity
      const vy = THREE.MathUtils.randFloat(-0.3, -0.1); // Vertical velocity
      const vz = 0;
      velocities.push(vx, vy, vz);

      const color = new THREE.Color(Math.random() * 0xffffff);
      colors.push(color.r, color.g, color.b);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('velocity', new THREE.Float32BufferAttribute(velocities, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.4,
      vertexColors: true, // Enable using color attribute
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
    });

    confetti.current = new THREE.Points(geometry, material);
    currentScene.add(confetti.current);

    camera.current.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);

      const positionsArray = geometry.attributes.position.array;
      const velocitiesArray = geometry.attributes.velocity.array;

      for (let i = 0; i < positionsArray.length; i += 3) {
        positionsArray[i] += velocitiesArray[i];     // Update X
        positionsArray[i + 1] += velocitiesArray[i + 1]; // Update Y
        // positionsArray[i + 2] += velocitiesArray[i + 2]; // Update Z (optional)

        velocitiesArray[i + 1] += 0.005; // Apply some gravity

        if (positionsArray[i + 1] < -10) {
          positionsArray[i + 1] = THREE.MathUtils.randFloat(10, 20);
          positionsArray[i] = THREE.MathUtils.randFloatSpread(20);
          velocitiesArray[i + 1] = THREE.MathUtils.randFloat(-0.3, -0.1);
        }
      }

      geometry.attributes.position.needsUpdate = true;

      currentRenderer.render(currentScene, camera.current);
    };

    animate();

    const handleResize = () => {
      camera.current.aspect = window.innerWidth / window.innerHeight;
      camera.current.updateProjectionMatrix();
      currentRenderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      document.body.removeChild(currentRenderer.domElement);
      currentRenderer.dispose();
      geometry.dispose();
      material.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null; // This component doesn't need to render any HTML
};

export default PaperConfetti;