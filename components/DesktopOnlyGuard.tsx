"use client";
import { useState, useEffect } from 'react';
import { Monitor } from 'lucide-react';

interface DesktopOnlyGuardProps {
  children: React.ReactNode;
}

export default function DesktopOnlyGuard({ children }: DesktopOnlyGuardProps) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isDesktop) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 bg-[#0b0e17] flex items-center justify-center z-50">
      <div className="text-center max-w-md px-6">
        <div className="mb-6 flex justify-center">
          <Monitor size={64} className="text-[#82aaff]" />
        </div>
        <h1 className="text-2xl font-orbitron font-bold text-[#82aaff] mb-4">
          Desktop Experience Required
        </h1>
        <p className="text-[#cccccc] text-sm leading-relaxed mb-6">
          This portfolio was designed to be experienced on a desktop device.
          Please access it using a larger screen for the best experience.
        </p>
        <p className="text-[#666] text-xs">
          Mobile support is coming soon.
        </p>
      </div>
    </div>
  );
}