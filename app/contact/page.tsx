"use client";
import { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -200, y: -200 });
  };

  return (
    <div className="h-full bg-[#0b0e17] p-6 flex items-center justify-center">
      <div
        className="relative bg-[#0b0e17]/90 backdrop-blur-sm rounded-xl border border-[#1A2137] hover:border-[#82aaff] shadow-lg hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 overflow-hidden max-w-md w-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(130, 170, 255, 0.15), transparent 70%)`,
          }}
        />
        <div className="p-6 relative z-10">
          <h2 className="text-xl font-semibold text-[#82aaff] mb-6">Contact</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-mono text-[#cccccc] mb-2">Email</p>
              <p className="text-[#82aaff] font-mono">lbergamascki@gmail.com</p>
            </div>
            <div>
              <p className="text-sm font-mono text-[#cccccc] mb-2">Email suggestion</p>
              <div className="border border-[#1A2137] rounded p-3 font-mono text-sm text-[#cccccc]">
                <p><span className="text-[#82aaff]">Subject:</span> Contact via portfolio</p>
                <p className="mt-2">Hi Levi,</p>
                <p>I wanted to get in touch regarding...</p>
                <p className="text-[#666]">...</p>
              </div>
            </div>
            <a
              href="mailto:lbergamascki@gmail.com?subject=Contact%20via%20portfolio"
              className="w-full bg-transparent border border-[#82aaff]/70 text-[#82aaff] hover:bg-[#82aaff]/20 hover:text-[#82aaff] py-2 px-3 rounded-lg text-sm text-center transition-all backdrop-blur-sm block"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 flex gap-4">
        <a
          href="https://github.com/leviberga"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#cccccc] hover:text-[#82aaff] transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/levi-bergamascki"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#cccccc] hover:text-[#82aaff] transition-colors"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
}