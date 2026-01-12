import { createHighlighter } from 'shiki';

export default async function About() {
  const highlighter = await createHighlighter({
    themes: ['tokyo-night'],
    langs: ['typescript'],
  });

  const code = `export const developerProfile = {
  // Personal Information
  name: "Levi Bergamascki",
  role: "Java Backend Developer",

  // Professional Summary
  bio:  "Software developer focused on backend development with Java and Spring Boot. " +
        "I enjoy designing APIs, applying clean architecture principles, and building reliable systems. " +
        "I also have solid experience with modern frontend technologies, which helps me communicate better " +
        "with frontend teams and understand the full product flow.",


  // Current Role
  currentPosition: "Young Apprentice Developer at Mercado Pago",

  // Core Interests
  mainInterests: [
    "Java & Spring Boot",          // REST APIs, business rules, clean architecture
    "Backend Architecture",        // Layered architecture, DDD concepts
    "SQL Databases",               // Relational modeling and queries
    "API Design",                  // RESTful APIs and integrations
    "System Reliability",          // Error handling, validations, resilience
  ],

  // Personal Traits
  traits: [
    "Analytical",                  // Breaks down complex problems logically
    "Detail-Oriented",             // Cares about code quality and consistency
    "Continuous Learner",          // Actively improving backend skills
    "Responsible",                 // Writes code thinking about edge cases
    "Collaborative",               // Communicates well with different roles
  ],
} as const;`;


  const html = highlighter.codeToHtml(code, {
    lang: 'typescript',
    theme: 'tokyo-night',
  });

  highlighter.dispose();

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