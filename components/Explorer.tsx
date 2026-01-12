'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code, FileText } from 'lucide-react';

const explorerItems = [
  { name: 'index.html', route: '/', icon: FileText },
  { name: 'about_me.ts', route: '/about', icon: Code },
  { name: 'projects.html', route: '/projects', icon: FileText },
  { name: 'experience.ts', route: '/experience', icon: Code },
  { name: 'contact.html', route: '/contact', icon: FileText },
];

export default function Explorer() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-[#0D111B] text-[#cccccc] border-r border-[#1A2137] flex flex-col h-full">
      <div className="px-4 py-2 text-sm font-semibold text-[#cccccc] border-b border-[#1A2137]">
        EXPLORER
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="py-2">
          {explorerItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.route;
            return (
              <li key={item.name}>
                <Link
                  href={item.route}
                  className={`flex items-center px-4 py-1 text-sm hover:bg-[#37373d] ${
                    isActive ? 'bg-[#37373d] text-[#ffffff]' : ''
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}