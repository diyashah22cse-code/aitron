"use client";

import { useEffect, RefObject } from "react";
import * as THREE from "three";

interface ThreeBackgroundProps {
  canvasRef: RefObject<HTMLDivElement>;
}

export default function ThreeBackground({ canvasRef }: ThreeBackgroundProps) {
  useEffect(() => {
    if (!canvasRef?.current) return;

    const container = canvasRef.current;
    const scene = new THREE.Scene();

    try {
      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 6.5;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      if (container && container.children.length === 0) {
        container.appendChild(renderer.domElement);
      }

      // Vertex shader
      const vertexShader = `
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `;

      // Fragment shader
      const fragmentShader = `
        uniform vec3 uColor;
        uniform vec3 uLightPos;
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        float dither4x4(vec2 position, float brightness) {
          int x = int(mod(position.x, 4.0));
          int y = int(mod(position.y, 4.0));
          int index = x + y * 4;
          float limit = 0.0;
          if (index == 0) limit = 0.0625; if (index == 1) limit = 0.5625;
          if (index == 2) limit = 0.1875; if (index == 3) limit = 0.6875;
          if (index == 4) limit = 0.8125; if (index == 5) limit = 0.3125;
          if (index == 6) limit = 0.9375; if (index == 7) limit = 0.4375;
          if (index == 8) limit = 0.25;   if (index == 9) limit = 0.75;
          if (index == 10) limit = 0.125; if (index == 11) limit = 0.625;
          if (index == 12) limit = 1.0;   if (index == 13) limit = 0.5;
          if (index == 14) limit = 0.875; if (index == 15) limit = 0.375;
          return brightness < limit ? 0.0 : 1.0;
        }
        
        void main() {
          float structure = smoothstep(0.3, 0.5, sin(vPosition.x * 5.0 + uTime * 2.0) + cos(vPosition.y * 5.0));
          vec3 viewDirection = normalize(cameraPosition - vPosition);
          vec3 lightDir = normalize(uLightPos - vPosition);
          float diff = max(dot(vNormal, lightDir), 0.0);
          float fresnel = pow(1.0 - dot(vNormal, viewDirection), 3.0);
          
          float brightness = diff * 0.1 + 0.1 + structure * 0.05; 
          float finalDither = dither4x4(gl_FragCoord.xy, brightness);
        
          vec3 baseColor = uColor;
          vec3 finalColor = mix(vec3(0.0), baseColor, finalDither);
        
          finalColor += vec3(0.0, 0.5, 0.7) * fresnel * 0.3; 
        
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `;

      const aiCoreMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uColor: { value: new THREE.Color(0x00b8d9) },
          uLightPos: { value: new THREE.Vector3(10, 5, 5) },
          uTime: { value: 0.0 },
        },
        wireframe: true,
      });

      const coreGeometry = new THREE.IcosahedronGeometry(2, 1);
      const coreMesh = new THREE.Mesh(coreGeometry, aiCoreMaterial);
      scene.add(coreMesh);

      const getPointOnSphere = (radius: number): THREE.Vector3 => {
        const phi = Math.acos(-1 + 2 * Math.random());
        const theta = Math.sqrt(Math.PI * 250) * phi;
        return new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        );
      };

      // arcs removed — no surrounding data arcs

      const nodesGeo = new THREE.BufferGeometry();
      const nodePositions = [];
      for (let i = 0; i < 40; i++) {
        const v = getPointOnSphere(2.01);
        nodePositions.push(v.x, v.y, v.z);
      }
      nodesGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(nodePositions, 3)
      );
      const nodesMaterial = new THREE.PointsMaterial({
        color: 0x00b8d9,
        size: 0.08,
        transparent: true,
        opacity: 0.8,
      });
      const nodesMesh = new THREE.Points(nodesGeo, nodesMaterial);
      coreMesh.add(nodesMesh);

      const starGeo = new THREE.BufferGeometry();
      const starCount = 1500;
      const starPos = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount * 3; i++) {
        starPos[i] = (Math.random() - 0.5) * 40;
      }
      starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
      const starMat = new THREE.PointsMaterial({
        color: 0x999999,
        size: 0.05,
        transparent: true,
      });
      const stars = new THREE.Points(starGeo, starMat);
      scene.add(stars);

      const clock = new THREE.Clock();
      let reqId: number;
      const animate = () => {
        reqId = requestAnimationFrame(animate);
        const time = clock.getElapsedTime();

        aiCoreMaterial.uniforms.uTime.value = time;

        nodesMaterial.size = 0.08 + Math.sin(time * 0.8) * 0.02;
        nodesMaterial.opacity = 0.6 + Math.sin(time * 0.5) * 0.4;

        coreMesh.rotation.y = time * 0.08;
        stars.rotation.y = time * 0.02;

        renderer.render(scene, camera);
      };
      reqId = requestAnimationFrame(animate);

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(reqId);
        try {
          if (container && container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
          renderer.dispose();
          starGeo.dispose();
          nodesGeo.dispose();
          coreGeometry.dispose();
          aiCoreMaterial.dispose();
          nodesMaterial.dispose();
          starMat.dispose();
        } catch (e) {
          // ignore cleanup errors
        }
      };
    } catch (error) {
      console.error("Three.js initialization error:", error);
      return () => {};
    }
  }, [canvasRef]);

  return null;
}
