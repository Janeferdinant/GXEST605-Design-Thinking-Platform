import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Eye, Sparkles } from 'lucide-react';

interface ProductViewer3DProps {
  productNumber: number;
  productName: string;
}

export const ProductViewer3D: React.FC<ProductViewer3DProps> = ({ productNumber, productName }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight || 320;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070c1e);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    currentMount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(0xD4AF37, 2.5, 50);
    goldPointLight.position.set(5, 5, 5);
    scene.add(goldPointLight);

    const burgundyLight = new THREE.PointLight(0xA71D3A, 2.0, 50);
    burgundyLight.position.set(-5, -2, -5);
    scene.add(burgundyLight);

    // Materials
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: wireframe
    });

    const burgundyMaterial = new THREE.MeshStandardMaterial({
      color: 0x58112C,
      metalness: 0.6,
      roughness: 0.35,
      wireframe: wireframe
    });

    const darkAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0x1E293B,
      metalness: 0.9,
      roughness: 0.15,
      wireframe: wireframe
    });

    // Create 3D Geometry based on Product Archetype
    const productGroup = new THREE.Group();

    if (productNumber === 1) { // Smart Trash Bin
      const binBody = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 0.8, 2.2, 32), burgundyMaterial);
      const binLid = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 0.3, 32), goldMaterial);
      binLid.position.y = 1.25;
      const cameraSensor = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), darkAccentMaterial);
      cameraSensor.position.set(0, 1.45, 0);
      productGroup.add(binBody, binLid, cameraSensor);
    } else if (productNumber === 2) { // Neonatal Phototherapy
      const standPole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3.0, 16), darkAccentMaterial);
      const canopy = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.25, 1.2), burgundyMaterial);
      canopy.position.set(0.6, 1.5, 0);
      const ledPanel = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.05, 1.0), goldMaterial);
      ledPanel.position.set(0.6, 1.35, 0);
      const baseStand = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.08, 16, 32), goldMaterial);
      baseStand.rotation.x = Math.PI / 2;
      baseStand.position.y = -1.5;
      productGroup.add(standPole, canopy, ledPanel, baseStand);
    } else if (productNumber === 3) { // Solar Irrigation Controller
      const box = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.8, 0.8), burgundyMaterial);
      const solarPanel = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.06, 1.2), darkAccentMaterial);
      solarPanel.position.set(0, 0.95, 0);
      solarPanel.rotation.x = -0.35;
      const valveProbe = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.02, 1.6, 16), goldMaterial);
      valveProbe.position.set(0, -1.5, 0);
      productGroup.add(box, solarPanel, valveProbe);
    } else if (productNumber === 4) { // Smart Cane
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.04, 3.2, 16), darkAccentMaterial);
      const handle = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.08, 16, 32, Math.PI), burgundyMaterial);
      handle.position.set(-0.25, 1.6, 0);
      handle.rotation.z = Math.PI / 2;
      const sensorHead = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), goldMaterial);
      sensorHead.position.set(0, 1.2, 0);
      productGroup.add(shaft, handle, sensorHead);
    } else if (productNumber === 8) { // Induction CookBot
      const cooktop = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.5, 0.5, 32), darkAccentMaterial);
      const inductionCoilRing = new THREE.Mesh(new THREE.RingGeometry(0.4, 1.1, 32), goldMaterial);
      inductionCoilRing.rotation.x = -Math.PI / 2;
      inductionCoilRing.position.y = 0.26;
      const carousel = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.8, 6), burgundyMaterial);
      carousel.position.set(0, 1.2, 0);
      productGroup.add(cooktop, inductionCoilRing, carousel);
    } else { // Generic Precision Engineering Enclosure
      const mainCore = new THREE.Mesh(new THREE.DodecahedronGeometry(1.2, 0), burgundyMaterial);
      const goldRing = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.06, 16, 64), goldMaterial);
      const innerSensor = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 1), darkAccentMaterial);
      productGroup.add(mainCore, goldRing, innerSensor);
    }

    scene.add(productGroup);

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (autoRotate) {
        productGroup.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight || 320;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [productNumber, wireframe, autoRotate]);

  return (
    <div className="relative w-full h-80 rounded-2xl overflow-hidden glass-panel border border-gold-500/30 shadow-luxury">
      {/* ThreeJS Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating 3D Controls */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <span className="text-[10px] font-bold px-2 py-1 rounded bg-navy-950/80 border border-gold-500/30 text-gold-300 backdrop-blur-md flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-gold-400" />
          Interactive 3D Engineering Model
        </span>
      </div>

      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-2 rounded-lg text-xs backdrop-blur-md border transition-all ${
            autoRotate
              ? 'bg-burgundy-900/80 text-gold-300 border-gold-500/40'
              : 'bg-navy-950/80 text-ivory-400 border-gold-500/20 hover:text-gold-300'
          }`}
          title="Toggle Auto Rotation"
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
        </button>

        <button
          onClick={() => setWireframe(!wireframe)}
          className={`p-2 rounded-lg text-xs backdrop-blur-md border transition-all ${
            wireframe
              ? 'bg-gold-500 text-navy-950 border-gold-400 font-bold'
              : 'bg-navy-950/80 text-ivory-400 border-gold-500/20 hover:text-gold-300'
          }`}
          title="Toggle CAD Wireframe Mesh"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

