/**
 * =============================================================================
 * ARQUIVO DE DADOS DO PORTFÓLIO - Sabryna Rodrigues Araújo
 * =============================================================================
 * 
 * INSTRUÇÕES DE EDIÇÃO:
 * - Todos os dados do site estão centralizados aqui
 * - Para trocar a foto: substitua o arquivo em /public/profile.jpg
 * - Para adicionar projetos: adicione um novo objeto no array 'projects'
 * - Para adicionar experiências: adicione um novo objeto no array 'experiences'
 * - Links com [COLOCAR_...] são placeholders para você preencher
 * 
 * =============================================================================
 */

// ============================================================================
// TIPOS TYPESCRIPT
// ============================================================================

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  github: string;
  linkedin: string;
  lattes: string;
  whatsapp: string;
  location: string;
  // Caminho relativo a partir de /public
  profileImage: string;
  // Iniciais para avatar placeholder
  initials: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: "briefcase" | "folder" | "file-text" | "award";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  tags: string[];
  current: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  deliverables: string[];
  tags: ProjectTag[];
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    article?: string;
    figma?: string;
  };
  // Caminho da imagem de capa (opcional)
  coverImage?: string;
  featured: boolean;
}

export type ProjectTag = 
  | "Front-end" 
  | "Back-end" 
  | "QA" 
  | "Figma" 
  | "UML" 
  | "Requisitos" 
  | "Deploy"
  | "Testes";

export interface Publication {
  id: string;
  title: string;
  event: string;
  year: number;
  abstract?: string;
  link: string;
  authors?: string[];
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  // Relaciona com tags de projetos para highlight
  relatedTags?: ProjectTag[];
}

export interface Education {
  institution: string;
  course: string;
  period: string;
  current: boolean;
}

// ============================================================================
// DADOS PESSOAIS
// ============================================================================

export const personalInfo: PersonalInfo = {
  name: "Sabryna Rodrigues Araújo",
  title: "Análise de Software • Desenvolvimento Web • Testes Exploratórios",
  subtitle: "Estudante de Ciência da Computação na UFMA, focada em análise, desenvolvimento e qualidade de software.",
  email: "sabrynarodrigues1313@gmail.com",
  github: "https://github.com/SabrynaS",
  linkedin: "https://www.linkedin.com/in/sabryna-rodrigues/",
  lattes: "http://lattes.cnpq.br/1788136657834045",
  whatsapp: "5598996219610", // Formato internacional sem +
  location: "São Luís, MA - Brasil",
  // TROQUE O ARQUIVO EM /public/profile.jpg PARA MUDAR A FOTO
  profileImage: "/profile.jpg",
  initials: "SR",
};

// ============================================================================
// ESTATÍSTICAS DO HERO
// ============================================================================

export const stats: Stat[] = [
  {
    label: "No NCA/UFMA",
    value: "Desde 2024",
    icon: "briefcase",
  },
  {
    label: "Projetos Acadêmicos",
    value: "3+ Completos",
    icon: "folder",
  },
  {
    label: "Publicação Aprovada",
    value: "Experience Report",
    icon: "file-text",
  },
];

// ============================================================================
// SOBRE MIM
// ============================================================================

export const aboutMe = {
  description: `Sou estudante de Ciência da Computação pela UFMA, apaixonada por criar soluções que funcionam bem e fazem sentido para quem usa. Minha atuação combina análise de sistemas, desenvolvimento web e qualidade de software, sempre buscando entregar valor real.`,
  highlights: [
    "Análise e levantamento de requisitos",
    "Prototipagem (Figma) e documentação (UML/fluxos)",
    "Desenvolvimento web (front-end e back-end)",
    "Testes exploratórios e reporte de achados",
  ],
};

// ============================================================================
// EXPERIÊNCIAS
// ============================================================================

export const experiences: Experience[] = [
  {
    id: "nca-ufma",
    company: "Núcleo de Computação Aplicada (NCA/UFMA)",
    role: "Analista e Desenvolvedora de Software",
    period: "Out/2024 – Atual",
    description: [
      "Análise de sistemas com documentação UML completa",
      "Prototipagem de alta fidelidade no Figma",
      "Desenvolvimento front-end com React, TypeScript e JavaScript",
      "Desenvolvimento back-end com Python e Flask",
      "Aplicação de testes exploratórios nos sistemas desenvolvidos",
      "Atuação em projetos para clientes externos (ex.: TCE)",
    ],
    tags: ["Análise", "UML", "Figma", "React", "TypeScript", "Python", "Flask", "Testes Exploratórios"],
    current: true,
  },
  {
    id: "equatorial",
    company: "Projeto Equatorial (Detecção de Ligações Irregulares)",
    role: "QA - Testes Exploratórios",
    period: "Dez/2024 – Fev/2025",
    description: [
      "Planejamento e execução de testes exploratórios em protótipo de alta fidelidade no Figma",
      "Identificação e documentação de problemas de fluxo, usabilidade e inconsistências de interface",
      "Registro de evidências e comunicação dos achados para priorização e ajustes",
      "Resultado: artigo aprovado como relato de experiência",
    ],
    tags: ["QA", "Testes Exploratórios", "Figma", "Usabilidade", "Protótipo"],
    current: false,
  },
  {
    id: "petcomp",
    company: "PETComp (UFMA)",
    role: "Membro do Programa de Educação Tutorial",
    period: "Abr/2023 – Atual",
    description: [
      "Desenvolvimento e manutenção de softwares",
      "Monitorias, escrita de artigos e trabalho em equipe",
      "Aprendizado e aplicação em desenvolvimento web",
    ],
    tags: ["Desenvolvimento Web", "Artigos", "Monitoria"],
    current: true,
  },
  {
    id: "multiplus",
    company: "Multiplus Digital",
    role: "Estagiária de Suporte Técnico",
    period: "Jun/2019 – Dez/2019",
    description: [
      "Suporte a hardware e software",
      "Controle de equipamentos e manutenção",
    ],
    tags: ["Suporte Técnico", "Hardware", "Software"],
    current: false,
  },
];

// ============================================================================
// PROJETOS
// ============================================================================

export const projects: Project[] = [
  {
    id: "extensao-ufma",
    slug: "extensao-ufma",
    title: "Extensão UFMA",
    shortDescription: "Sistema de gerenciamento de ações extensionistas da UFMA.",
    fullDescription: "Plataforma web para gerenciamento de ações de extensão universitária, facilitando o registro, acompanhamento e divulgação de projetos de extensão da UFMA.",
    role: "Análise + Desenvolvimento Front-end",
    deliverables: [
      "Levantamento de requisitos completo",
      "Documentação e artefatos de análise",
      "Desenvolvimento do front-end",
    ],
    tags: ["Front-end", "Requisitos", "Deploy"],
    technologies: ["React", "TypeScript", "JavaScript", "CSS"],
    links: {
      github: "https://github.com/SabrynaS/extensao_ufma",
      demo: "https://extensao-ufma.vercel.app/",
    },
    featured: true,
  },
  {
    id: "portal-egressos",
    slug: "portal-egressos",
    title: "Portal de Egressos",
    shortDescription: "Sistema para acompanhamento de egressos do curso de Ciência da Computação.",
    fullDescription: "Projeto desenvolvido na disciplina de Laboratório de Programação. Portal completo para cadastro e acompanhamento de egressos, permitindo conexão entre ex-alunos e a universidade.",
    role: "Análise + Prototipagem + Desenvolvimento + Testes",
    deliverables: [
      "Análise completa do sistema",
      "Prototipagem de interfaces",
      "Levantamento de requisitos",
      "Participação no desenvolvimento front-end e back-end",
      "Execução de testes automatizados",
    ],
    tags: ["Front-end", "Back-end", "Requisitos", "Figma", "Testes"],
    technologies: ["React", "TypeScript", "JavaScript", "Spring Boot", "Java"],
    links: {
      github: "https://github.com/Gabriel-Bastos-Rabelo/Portal-Egressos-Backend",
      // demo: "[COLOCAR_LINK_DEMO_AQUI]", // Descomente quando tiver o link
    },
    featured: true,
  },
  {
    id: "projeto-equatorial",
    slug: "projeto-equatorial",
    title: "Projeto Equatorial",
    shortDescription: "Sistema de detecção de ligações irregulares - Testes exploratórios em protótipo.",
    fullDescription: "Execução de testes exploratórios em protótipo de alta fidelidade desenvolvido no Figma para sistema de detecção de ligações irregulares ('gambiarras'). Identificação de problemas de fluxo, usabilidade e inconsistências de interface. O trabalho resultou em um artigo científico aprovado como Experience Report.",
    role: "Execução de Testes Exploratórios + Reporte de Achados",
    deliverables: [
      "Planejamento e execução de testes exploratórios",
      "Identificação de problemas de usabilidade e fluxo",
      "Registro de evidências e comunicação de achados",
      "Artigo científico aprovado",
    ],
    tags: ["QA", "Figma", "Testes"],
    technologies: ["Figma"],
    links: {
      article: "https://www.scitepress.org/Papers/2025/134830/134830.pdf",
      // figma: "[COLOCAR_LINK_FIGMA_AQUI]", // Descomente quando tiver o link
    },
    featured: true,
  },
];

// ============================================================================
// PUBLICAÇÕES
// ============================================================================

export const publications: Publication[] = [
  {
    id: "iceis-2025",
    title: "Apply Prototype Exploratory Testing in a High Fidelity Prototype: An Experience Report",
    event: "2025 International Conference on Enterprise Information Systems (ICEIS)",
    year: 2025,
    abstract: "Experience report sobre aplicação de testes exploratórios em protótipos de alta fidelidade.",
    link: "https://www.scitepress.org/Papers/2025/134830/134830.pdf",
  },
];

// ============================================================================
// SKILLS
// ============================================================================

export const skillCategories: SkillCategory[] = [
  {
    name: "Linguagens",
    skills: [
      { name: "Java", relatedTags: ["Back-end"] },
      { name: "Python", relatedTags: ["Back-end"] },
      { name: "C" },
      { name: "JavaScript", relatedTags: ["Front-end", "Back-end"] },
    ],
  },
  {
    name: "Web",
    skills: [
      { name: "HTML", relatedTags: ["Front-end"] },
      { name: "CSS", relatedTags: ["Front-end"] },
      { name: "SQL", relatedTags: ["Back-end"] },
    ],
  },
  {
    name: "Qualidade",
    skills: [
      { name: "Testes Exploratórios", relatedTags: ["QA", "Testes"] },
    ],
  },
  {
    name: "Análise",
    skills: [
      { name: "Requisitos", relatedTags: ["Requisitos"] },
      { name: "Prototipação (Figma)", relatedTags: ["Figma"] },
      { name: "UML/Documentação", relatedTags: ["UML"] },
    ],
  },
  {
    name: "Idiomas",
    skills: [
      { name: "Inglês (Intermediário)" },
    ],
  },
];

// ============================================================================
// EDUCAÇÃO
// ============================================================================

export const education: Education[] = [
  {
    institution: "Universidade Federal do Maranhão (UFMA)",
    course: "Ciência da Computação - Bacharelado",
    period: "2022 – Atual",
    current: true,
  },
  {
    institution: "Instituto Federal do Maranhão (IFMA)",
    course: "Técnico em Informática",
    period: "2019 – 2021",
    current: false,
  },
];

// ============================================================================
// NAVEGAÇÃO
// ============================================================================

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Publicações", href: "#publicacoes" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contato" },
];

// ============================================================================
// CONFIGURAÇÕES DO SITE
// ============================================================================

export const siteConfig = {
  title: "Sabryna Rodrigues | Portfólio",
  description: "Portfólio de Sabryna Rodrigues Araújo - Analista de Software, Desenvolvedora Web e especialista em Testes Exploratórios.",
  // Link para download do CV (coloque o arquivo em /public/cv.pdf)
  cvDownloadUrl: "/cv.pdf",
  // Mensagem padrão do WhatsApp
  whatsappMessage: "Olá! Vi seu portfólio e gostaria de conversar.",
};
