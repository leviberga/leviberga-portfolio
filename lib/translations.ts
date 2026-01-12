export type Language = 'en' | 'pt-BR';

export const translations = {
  en: {
    // Home
    subtitle: "Fullstack Developer Portfolio",
    gotoFile: "Go to File",
    selectFile: "Select a file to view",

    // Navigation
    explorer: "EXPLORER",

    // About
    aboutCode: `export const developerProfile = {
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
} as const;`,

    // Experience
    experienceCode: `// Work Experience - Professional Journey
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

// Continuous learning and growth in the ever-evolving tech landscape!`,

    // Projects
    sourceCode: "Source Code",
    project1Desc: "A modern, responsive portfolio website showcasing projects and skills, built with Next.js.",
    project2Desc: "Full-stack personal finance solution with user authentication, income and expense tracking, balance and financial history visualization.",
    project3Desc: "RESTful API for managing collection points and collection records (topic: Waste Management and Recycling).",
    project4Desc: "A native Android application created to transform and modernize communication between citizens and emergency services, using real-time geolocation to speed up response times and save lives.",
    project5Desc: "This is an Android project (Kotlin/Gradle) that provides clear, transparent, and optimized communication, as well as shortcuts and commands that facilitate this process.",

    // Contact
    contactTitle: "Contact",
    email: "Email",
    emailSuggestion: "Email suggestion",
    emailSubject: "Subject: Contact via portfolio",
    emailBody: "Hi Levi,\n\nI wanted to get in touch regarding...\n\n...",
    sendEmail: "Send Email",
  },
  'pt-BR': {
    // Home
    subtitle: "Portfólio de Desenvolvedor Fullstack",
    gotoFile: "Ir para Arquivo",
    selectFile: "Selecione um arquivo para visualizar",

    // Navigation
    explorer: "EXPLORADOR",

    // About
    aboutCode: `export const developerProfile = {
  // Informações Pessoais
  name: "Levi Bergamascki",
  role: "Desenvolvedor Backend Java",

  // Resumo Profissional
  bio:  "Desenvolvedor de software focado em desenvolvimento backend com Java e Spring Boot. " +
        "Gosto de projetar APIs, aplicar princípios de arquitetura limpa e construir sistemas confiáveis. " +
        "Também tenho experiência sólida com tecnologias frontend modernas, o que me ajuda a comunicar melhor " +
        "com equipes frontend e entender o fluxo completo do produto.",

  // Cargo Atual
  currentPosition: "Desenvolvedor Jovem Aprendiz no Mercado Pago",

  // Interesses Principais
  mainInterests: [
    "Java & Spring Boot",          // APIs REST, regras de negócio, arquitetura limpa
    "Arquitetura Backend",         // Arquitetura em camadas, conceitos DDD
    "Bancos de Dados SQL",         // Modelagem relacional e consultas
    "Design de API",               // APIs RESTful e integrações
    "Confiabilidade de Sistema",   // Tratamento de erros, validações, resiliência
  ],

  // Traços Pessoais
  traits: [
    "Analítico",                   // Quebra problemas complexos logicamente
    "Orientado a Detalhes",        // Cuida da qualidade e consistência do código
    "Aprendiz Contínuo",          // Melhorando ativamente habilidades backend
    "Responsável",                 // Escreve código pensando em casos extremos
    "Colaborativo",                // Comunica bem com diferentes papéis
  ],
} as const;`,

    // Experience
    experienceCode: `// Experiência Profissional - Jornada Profissional
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
    position: "Desenvolvedor Jovem Aprendiz",
    duration: "Maio, 2025 - Presente",
    description: "Desenvolver sistemas web focados em otimizar processos internos como Garantia de Qualidade " +
      "e integração com sistemas parceiros. Ativamente envolvido na construção de ferramentas que melhoram " +
      "a eficiência operacional, validação de dados e confiabilidade do sistema em um ambiente de pagamentos de grande escala.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "Python"]
  },
  {
    company: "Drivere",
    position: "Desenvolvedor Fullstack",
    duration: "Dez, 2025 - Presente",
    description: "Co-fundou e atualmente desenvolvendo Drivere, uma plataforma que conecta aspirantes a motoristas com " +
      "instrutores licenciados pelo DETRAN. Participar de todo o ciclo de vida do desenvolvimento de software, " +
      "desde definição de produto e design de sistema até implementação e implantação, focando em " +
      "arquitetura escalável e integrações seguras.",
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "AWS", "Docker", "PostgreSQL"]
  }
] as const;

// Aprendizado contínuo e crescimento no cenário tecnológico em constante evolução!`,

    // Projects
    sourceCode: "Código Fonte",
    project1Desc: "Um site de portfólio moderno e responsivo que apresenta projetos e habilidades, construído com Next.js.",
    project2Desc: "Solução full-stack de finanças pessoais com autenticação de usuário, rastreamento de receitas e despesas, visualização de saldo e histórico financeiro.",
    project3Desc: "API RESTful para gerenciar pontos de coleta e registros de coleta (tópico: Gestão de Resíduos e Reciclagem).",
    project4Desc: "Um aplicativo Android nativo criado para transformar e modernizar a comunicação entre cidadãos e serviços de emergência, usando geolocalização em tempo real para acelerar os tempos de resposta e salvar vidas.",
    project5Desc: "Este é um projeto Android (Kotlin/Gradle) que fornece comunicação clara, transparente e otimizada, bem como atalhos e comandos que facilitam esse processo.",

    // Contact
    contactTitle: "Contato",
    email: "Email",
    emailSuggestion: "Sugestão de email",
    emailSubject: "Assunto: Contato via portfólio",
    emailBody: "Oi Levi,\n\nQueria entrar em contato sobre...\n\n...",
    sendEmail: "Enviar Email",
  },
};