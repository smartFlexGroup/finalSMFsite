"use client";

import { Suspense, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, Loader } from '@react-three/drei';
import { Maximize, Minimize, ArrowRight } from 'lucide-react';

function Model({ modelPath = "/models/shark.glb" }: { modelPath?: string }) {
  // Load the GLB model dynamically
  const { scene } = useGLTF(modelPath);
  
  return (
    <Stage
      environment="city"
      intensity={0.6}
      adjustCamera={0.8}
      shadows={false}
    >
      <primitive object={scene} scale={3} />
    </Stage>
  );
}

interface PartViewerProps {
  modelPath?: string;
}

export default function PartViewer({ modelPath = "/models/shark.glb" }: PartViewerProps) {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInteraction = () => {
    setHasInteracted(true);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const viewerContent = (
    <div 
      className={
        isFullScreen 
          ? 'fixed inset-0 z-[9999] w-screen h-screen bg-slate-900' 
          : 'relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden'
      }
      onPointerDown={handleInteraction}
    >
      {/* Full Screen Toggle Button */}
      <button
        onClick={toggleFullScreen}
        className={`absolute z-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-lg transition-colors shadow-lg ${
          isFullScreen ? 'top-6 right-6' : 'top-4 right-4'
        }`}
        aria-label={isFullScreen ? 'Exit full screen' : 'Enter full screen'}
      >
        {isFullScreen ? (
          <Minimize className="w-6 h-6" />
        ) : (
          <Maximize className="w-5 h-5" />
        )}
      </button>

      {/* Full Screen Button Hint - Only show in normal mode */}
      {!isFullScreen && (
        <div
          className={`absolute top-6 right-16 z-10 flex items-center gap-2 transition-opacity duration-500 ${
            hasInteracted ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <span className="text-sm font-medium text-white drop-shadow-lg">
            Full Screen
          </span>
          <ArrowRight className="w-5 h-5 text-white drop-shadow-lg animate-bounce" />
        </div>
      )}

      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        gl={{ preserveDrawingBuffer: true }}
      >
        {/* Suspense with safe fallback - no img tags */}
        <Suspense fallback={null}>
          <Model modelPath={modelPath} />
        </Suspense>
        
        {/* OrbitControls for user interaction */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      
      {/* Interactive hint overlay with attribution */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-4 transition-opacity duration-500 ${
          hasInteracted ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="bg-black/50 backdrop-blur-sm text-white rounded-full px-4 py-2 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          <span className="text-sm font-medium">Click &amp; Drag to Inspect</span>
        </div>
        
        {/* Attribution */}
        <p className="text-xs text-white/80 text-center px-4">
          &quot;Shark&quot; by Greylife_Hansen is licensed under{' '}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            CC BY 4.0
          </a>
        </p>
      </div>
      
      {/* Loader shows progress bar while 24MB file loads */}
      <Loader
        containerStyles={{
          background: 'rgba(0, 0, 0, 0.5)',
        }}
        innerStyles={{
          background: '#06b6d4',
          width: '200px',
          height: '4px',
        }}
        barStyles={{
          background: '#0891b2',
          height: '4px',
        }}
        dataStyles={{
          color: '#ffffff',
          fontSize: '14px',
          fontFamily: 'sans-serif',
        }}
      />
    </div>
  );

  // Use portal for full screen mode to render directly into document.body
  if (isFullScreen && mounted) {
    return createPortal(viewerContent, document.body);
  }

  return viewerContent;
}
