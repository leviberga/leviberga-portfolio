import { createHighlighter } from 'shiki';

export default async function Experience() {
  const highlighter = await createHighlighter({
    themes: ['tokyo-night'],
    langs: ['typescript'],
  });

  const code = `// Work Experience - Professional Journey
interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export const workExperience: readonly Experience[] = [
  {
    company: "Mercado Pago",
    position: "Young Apprentice Developer",
    duration: "May, 2025 - Present",
    description: "Develop web systems focused on optimizing internal processes such as Quality Assurance " +
      "and integration with partner systems. Actively involved in building tools that improve " +
      "operational efficiency, data validation, and system reliability within a large-scale payments environment.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "Python"]
  },
  {
    company: "Drivere",
    position: "Fullstack Developer",
    duration: "Dec, 2025 - Present",
    description: "Co-founded and currently developing Drivere, a platform that connects aspiring drivers with " +
      "DETRAN-licensed instructors. Participate in the entire software development lifecycle, " +
      "from product definition and system design to implementation and deployment, focusing on " +
      "scalable architecture and secure integrations.",
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "AWS", "Docker", "PostgreSQL"]
  }
] as const;

// Continuous learning and growth in the ever-evolving tech landscape!`;

  const html = highlighter.codeToHtml(code, {
    lang: 'typescript',
    theme: 'tokyo-night',
  });

  return (
    <div className="h-full bg-[#1a1b26] p-8">
      <div
        className="font-mono text-sm leading-relaxed"
        style={{
          fontFamily: 'Fira Code, JetBrains Mono, monospace',
          lineHeight: '1.5',
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}