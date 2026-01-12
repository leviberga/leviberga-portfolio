import { Code, FileText } from 'lucide-react';
import Link from 'next/link';

interface FileTabProps {
  fileName: string;
  fileExtension: string;
  isActive: boolean;
  href: string;
}

export default function FileTab({ fileName, fileExtension, isActive, href }: FileTabProps) {
  const getIcon = () => {
    switch (fileExtension) {
      case 'ts':
        return <Code size={16} />;
      case 'html':
        return <FileText size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-2 px-4 py-2 border-r border-[#1A2137] cursor-pointer ${
          isActive
            ? 'bg-[#0D111B] text-[#cccccc] border-t-2 border-t-[#007acc]'
            : 'bg-[#0D111B] text-[#cccccc] opacity-75 hover:opacity-100'
        }`}
      >
        {getIcon()}
        <span className="text-sm font-mono">
          {fileName}.{fileExtension}
        </span>
        <div className="ml-2 w-2 h-2 rounded-full bg-[#0D111B] opacity-0"></div> {/* close button placeholder */}
      </div>
    </Link>
  );
}