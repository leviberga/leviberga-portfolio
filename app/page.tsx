"use client";
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 1000, height: 600 });

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -200, y: -200 });
  };

  const centerX = containerSize.width / 2;
  const centerY = containerSize.height / 2;
  const distance = Math.sqrt((mousePos.x - centerX) ** 2 + (mousePos.y - centerY) ** 2);
  const glowOpacity = Math.max(0, 0.5 - distance / 800);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center h-full bg-[#0b0e17] relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(130, 170, 255, 0.1), transparent 70%)`,
        }}
      />
      <div className="text-center relative z-10">
        <h1
          className="text-8xl font-orbitron font-bold text-[#cccccc] mb-4 tracking-wider hover:text-[#82aaff] transition-all duration-300 hover:scale-105 transform cursor-pointer"
          style={{
            textShadow: `0 0 20px rgba(130, 170, 255, ${glowOpacity})`,
          }}
        >
          LEVI
        </h1>
        <p
          className="text-2xl font-orbitron text-[#cccccc] mb-6"
          style={{
            textShadow: `0 0 15px rgba(130, 170, 255, ${glowOpacity * 0.8})`,
          }}
        >
          fullstack developer portfolio
        </p>
        <div
          className="space-y-2 text-sm font-orbitron text-[#cccccc]"
          style={{
            textShadow: `0 0 10px rgba(130, 170, 255, ${glowOpacity * 0.6})`,
          }}
        >
          <div>
            <span className="text-[#007acc]">Go to File</span> → Select a file to view
          </div>
        </div>
      </div>
    </div>
  );
}
