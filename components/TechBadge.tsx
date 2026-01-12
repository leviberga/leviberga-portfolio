import React from 'react';
import { Code, Database, Globe, Smartphone, Cloud, Server } from 'lucide-react';

interface TechBadgeProps {
  tech: string;
}

const techIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'Next.js': Globe,
  'TypeScript': Code,
  'Tailwind CSS': Code,
  'Shiki': Code,
  'Java': Code,
  'Servlet/JSP': Code,
  'JDBC': Database,
  'Oracle Database': Database,
  'HTML': Code,
  'CSS': Code,
  'Bootstrap': Code,
  'Spring Boot': Server,
  'PLSQL': Database,
  'Flyway': Database,
  'Docker': Server,
  'Kotlin': Code,
  'Jetpack Compose': Smartphone,
  'SQLite': Database,
  'Firebase': Cloud,
};

const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  const IconComponent = techIconMap[tech] || Code; // Default icon if not found

  return (
    <span className="inline-flex items-center gap-1 bg-[#1a1a2e]/50 text-[#82aaff] px-2 py-1 rounded-full text-xs font-mono border border-[#82aaff]/20 hover:bg-[#1a1a2e]/70 hover:border-[#82aaff]/40 transition-colors">
      <IconComponent size={12} className="text-[#82aaff]" />
      {tech}
    </span>
  );
};

export default TechBadge;