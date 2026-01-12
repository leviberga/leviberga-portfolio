'use client';

import { usePathname } from 'next/navigation';
import FileTab from './FileTab';

interface FileInfo {
  path: string;
  name: string;
  ext: string;
}

const files: FileInfo[] = [
  { path: '/', name: 'index', ext: 'html' },
  { path: '/about', name: 'about_me', ext: 'ts' },
  { path: '/projects', name: 'projects', ext: 'html' },
  { path: '/experience', name: 'experience', ext: 'ts' },
  { path: '/contact', name: 'contact', ext: 'html' },
];

interface EditorProps {
  children: React.ReactNode;
}

export default function Editor({ children }: EditorProps) {
  const pathname = usePathname();
  const currentFile = files.find(f => f.path === pathname) || files[0];

  return (
    <div className="flex flex-col h-full">
      <div className="flex bg-[#0D111B] border-b border-[#1A2137]">
        {files.map((file) => (
          <FileTab
            key={file.path}
            fileName={file.name}
            fileExtension={file.ext}
            isActive={file.path === pathname}
            href={file.path}
          />
        ))}
      </div>
      <div className="h-full overflow-auto bg-[#1e1e1e]">
        {children}
      </div>
    </div>
  );
}