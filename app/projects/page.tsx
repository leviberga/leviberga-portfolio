"use client";
import { useState } from 'react';
import TechBadge from '../../components/TechBadge';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      name: "Personal Portfolio",
      description: "A modern, responsive portfolio website showcasing projects and skills, built with Next.js.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shiki"],
      deploymentLink: "https://leviportfolio.vercel.app",
      repositoryLink: "https://github.com/levi/portfolio",
      imageName: "personalportfolio.png",
    },
    {
      name: "FinYou",
      description: "Full-stack personal finance solution with user authentication, income and expense tracking, balance and financial history visualization.",
      technologies: ["Java", "Servlet/JSP", "JDBC", "Oracle Database", "HTML", "CSS", "Bootstrap"],
      deploymentLink: "https://myecommerce.vercel.app",
      repositoryLink: "https://github.com/leviberga/FinYou",
      imageName: "finyou.png",
    },
    {
      name: "ESG Resíduos API",
      description: "RESTful API for managing collection points and collection records (topic: Waste Management and Recycling).",
      technologies: ["Java", "Spring Boot", "PLSQL", "Oracle Database", "Flyway", "Docker"],
      deploymentLink: "https://taskapi.herokuapp.com",
      repositoryLink: "https://github.com/leviberga/esg-residuos",
      imageName: "esgresiduos.png",
    },
    {
      name: "AcionaApp",
      description: "A native Android application created to transform and modernize communication between citizens and emergency services, using real-time geolocation to speed up response times and save lives.",
      technologies: ["Kotlin", "Jetpack Compose", "SQLite"],
      deploymentLink: "https://discord.com/oauth2/authorize?client_id=123456789",
      repositoryLink: "https://github.com/leviberga/acionaApp",
      imageName: "acionaapp.png",
    },
    {
      name: "World Trade Center Chat App",
      description: "This is an Android project (Kotlin/Gradle) that provides clear, transparent, and optimized communication, as well as shortcuts and commands that facilitate this process.",
      technologies: ["Kotlin", "Jetpack Compose", "Firebase"],
      deploymentLink: "https://discord.com/oauth2/authorize?client_id=123456789",
      repositoryLink: "https://github.com/leviberga/wtc-chat_ChallengeFIAP",
      imageName: "wtc-chat.png",
    },
  ];

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
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
   <div className="relative flex flex-col bg-[#0b0e17]/90 backdrop-blur-sm rounded-xl border border-[#1A2137]
             hover:border-[#82aaff] shadow-lg hover:shadow-2xl hover:translate-y-[-4px]
             transition-all duration-300 overflow-hidden"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}>
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(130, 170, 255, 0.15), transparent 70%)`,
    }}
  />
  <div className="h-32 bg-gradient-to-br from-[#1e1e1e]/80 to-[#0b0e17]/80 relative backdrop-blur-sm">
    <Image
      src={`/projects/${project.imageName}`}
      alt={`${project.name} preview`}
      width={400}
      height={200}
      className="w-full h-full object-cover opacity-70"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17]/90 to-transparent backdrop-blur-sm" />
  </div>

  <div className="p-4 relative z-10 flex flex-col flex-1">
    <h2 className="text-lg font-semibold text-[#82aaff] mb-2">
      {project.name}
    </h2>

    <p className="text-[#cccccc] text-sm mb-3 leading-relaxed">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-1 mb-4">
      {project.technologies.map((tech, i) => (
        <TechBadge key={i} tech={tech} />
      ))}
    </div>

    <div className="flex gap-2 mt-auto">
      {project.repositoryLink && (
        <a
          href={project.repositoryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-transparent border border-[#82aaff]/70 text-[#82aaff]
                     hover:bg-[#82aaff]/20 hover:text-[#82aaff]
                     py-2 px-3 rounded-lg text-sm text-center transition-all backdrop-blur-sm"
        >
          Source Code
        </a>
      )}
    </div>
  </div>
</div>

    );
  };

  return (
    <div className="h-full bg-[#0b0e17] p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}