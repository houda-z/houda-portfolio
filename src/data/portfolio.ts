export interface PersonalInfo {
  name: string;
  initials: string;
  role: string;
  subtitle: string;
  shortIntro: string;
  heroHeadline: string;
  heroBio: string;
  aboutParagraphs: string[];
  email: string;
  phone: string;
  location: string;
  availability: string;
  githubUrl: string;
  linkedinUrl: string;
  whatsappNumber?: string; // international format without spaces, e.g. "212600000000"
  profileImage: string;
  resumeDownloadUrl: string;
}

export interface SkillItem {
  name: string;
  iconClass: string;
  levelBadge?: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  numberBadge: string;
  title: string;
  subtitle: string;
  colorClass: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  featured: boolean;
  category: 'fullstack' | 'frontend' | 'ecommerce';
  image: string;
  imageAlt: string;
  demoUrl: string;
  githubUrl: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  type: 'education' | 'internship' | 'project';
  typeLabel: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  highlights?: string[];
}

export interface ServiceItem {
  id: string;
  iconClass: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  heroPills: string[];
  skillsOverview: {
    number: string;
    title: string;
    bgClass: string;
  }[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  experienceSubtitle?: string;
  experience: ExperienceItem[];
  services: ServiceItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Houda Zitouni",
    initials: "HZ",
    role: "Junior Full Stack Web Developer",
    subtitle: "Digital Development & Modern Web Technologies",
    shortIntro: "Hello, I'm Houda",
    heroHeadline: "Junior Full Stack Web Developer",
    heroBio: "Passionate about building responsive, user-friendly, and accessible web applications. Combining digital development training with modern frontend and backend technologies to deliver clean, maintainable code.",
    aboutParagraphs: [
      "I am a Junior Full Stack Web Developer with a formal background in Digital Development (Full Stack Web Development option). I have a strong foundation in both client-side interfaces and server-side logic, and I love turning wireframes into dynamic, high-performance web applications.",
      "My journey focuses on crafting accessible, responsive web interfaces using React, TypeScript, and Bootstrap, while connecting them to robust backend architectures with Node.js, PHP, and relational databases. I am deeply motivated by continuous learning, writing clean self-documenting code, and tackling real-world problems."
    ],
    email: "houdazitouni93@gmail.com",
    phone: "",
    location: "Marrakech, Morocco",
    availability: "Available for internships, junior roles & freelance projects",
    githubUrl: "https://github.com/houda-z",
    linkedinUrl: "https://www.linkedin.com/in/houda-zitouni-354a49247/",
    whatsappNumber: "",
    profileImage: "/profile.jpg",
    resumeDownloadUrl: "#contact"
  },

  heroPills: [
    "React & TypeScript",
    "Node.js & Express",
    "PHP & REST APIs",
    "Bootstrap 5",
    "SQL Databases",
    "Git & GitHub"
  ],

  // Numbered layered banner pills matching reference image 3
  skillsOverview: [
    { number: "1", title: "Frontend Engineering", bgClass: "pill-navy" },
    { number: "2", title: "Backend & REST APIs", bgClass: "pill-slate" },
    { number: "3", title: "Databases & SQL", bgClass: "pill-periwinkle" },
    { number: "4", title: "Version Control & Git", bgClass: "pill-navy" },
    { number: "5", title: "UI/UX & Figma", bgClass: "pill-slate" },
    { number: "6", title: "Modern Web Standards", bgClass: "pill-periwinkle" }
  ],

  skillCategories: [
    {
      id: "frontend",
      numberBadge: "01",
      title: "Frontend Development",
      subtitle: "Building dynamic, responsive & accessible user interfaces",
      colorClass: "navy",
      skills: [
        { name: "React", iconClass: "bi-filetype-jsx", description: "Reusable components, hooks, state management, and lifecycle." },
        { name: "TypeScript", iconClass: "bi-filetype-tsx", description: "Strong typing, interface modeling, compile-time safety." },
        { name: "JavaScript (ES6+)", iconClass: "bi-filetype-js", description: "Modern syntax, async/await, DOM APIs, closures." },
        { name: "HTML5", iconClass: "bi-filetype-html", description: "Semantic markup, SEO optimization, and web accessibility." },
        { name: "CSS3", iconClass: "bi-filetype-css", description: "Flexbox, CSS Grid, media queries, and animations." },
        { name: "Bootstrap 5", iconClass: "bi-bootstrap", description: "Grid system, utilities, responsive layouts, components." }
      ]
    },
    {
      id: "backend",
      numberBadge: "02",
      title: "Backend Development",
      subtitle: "Constructing reliable server-side endpoints and application logic",
      colorClass: "slate",
      skills: [
        { name: "Node.js", iconClass: "bi-hdd-network", description: "Server runtime, npm modules, and async I/O handling." },
        { name: "PHP", iconClass: "bi-filetype-php", description: "Server-side scripting, OOP architecture, and MVC flow." },
        {
          name: "Laravel", iconClass: "bi-code-slash", description: "PHP framework fundamentals, MVC architecture, routing, controllers, Eloquent ORM, and REST API development."
        },
        { name: "REST APIs", iconClass: "bi-diagram-3", description: "Designing CRUD endpoints, status codes, and JSON exchange." }
      ]
    },
    {
      id: "database",
      numberBadge: "03",
      title: "Databases",
      subtitle: "Relational data modeling, querying, and storage integrity",
      colorClass: "periwinkle",
      skills: [
        { name: "SQL", iconClass: "bi-database", description: "Structured queries, joins, indexing, and aggregations." },
        { name: "Relational Databases", iconClass: "bi-database-check", description: "MySQL/PostgreSQL schemas, primary/foreign keys, ERD design." }
      ]
    },
    {
      id: "tools",
      numberBadge: "04",
      title: "Tools & Workflow",
      subtitle: "Development environment, version control, and collaboration",
      colorClass: "navy",
      skills: [
        { name: "Git", iconClass: "bi-git", description: "Branching, committing, merge conflict resolution." },
        { name: "GitHub & GitLab", iconClass: "bi-github", description: "Repositories, Pull Requests, code review, issues." },
        { name: "Figma", iconClass: "bi-brush", description: "Design-to-code translation, wireframing, component tokens." },
        { name: "VS Code", iconClass: "bi-terminal", description: "Extensions, debugging, modern developer tooling." }
      ]
    },
    {
      id: "additional",
      numberBadge: "05",
      title: "Additional Technologies",
      subtitle: "Complementary programming foundations and best practices",
      colorClass: "slate",
      skills: [
        { name: "Python", iconClass: "bi-filetype-py", description: "General programming foundations, scripting, and data basics." },
        { name: "Responsive Design", iconClass: "bi-phone", description: "Mobile-first layouts ensuring flawless multi-device display." },
        { name: "Performance & A11y", iconClass: "bi-speedometer2", description: "Clean code structure, fast rendering, and WCAG awareness." }
      ]
    }
  ],

  projects: [
    {
      id: "edutrack",
      title: "EduTrack",
      subtitle: "Collaborative Academic Management Application",
      description: "Academic project focused on educational management, developed collaboratively to streamline academic records and student progression.",
      technologies: ["React", "Laravel", "TypeScript", "Bootstrap 5", "REST APIs", "Git/GitHub"],
      featured: true,
      category: "fullstack",
      image: "/projects/edutrack.svg",
      imageAlt: "EduTrack academic management dashboard screenshot preview",
      demoUrl: "https://github.com/houda-z/edutrack",
      githubUrl: "https://github.com/houda-z/EduTrack.git",
      highlights: [
        "Academic project focused on educational management, developed collaboratively",
        "Interactive dashboard views for tracking courses, student progression, and academic milestones",
        "Practiced collaborative Git workflows including branching, pull requests, and code reviews"
      ]
    },
    {
      id: "quickcart",
      title: "QuickCart",
      subtitle: "E-Commerce Application (PHP & MVC)",
      description: "E-commerce application developed using PHP, object-oriented programming, MVC architecture, and SQL.",
      technologies: ["PHP", "OOP", "MVC Architecture", "SQL", "HTML5/CSS3"],
      featured: true,
      category: "ecommerce",
      image: "/projects/quickcart.svg",
      imageAlt: "QuickCart e-commerce storefront preview",
      demoUrl: "https://github.com/houda-z/quickcart",
      githubUrl: "https://github.com/houda-z/Quick-cart.git",
      highlights: [
        "Engineered using PHP with object-oriented programming and MVC architecture",
        "Structured SQL relational database for product catalogs, user accounts, and orders",
        "Dynamic shopping cart workflow, inventory handling, and checkout flow"
      ]
    },
    {
      id: "amazonstyle",
      title: "Amazon Style",
      subtitle: "E-Commerce Cart with Jasmine Testing",
      description: "E-commerce interface with shopping cart functionality using JavaScript and object-oriented programming, with Jasmine tests.",
      technologies: ["JavaScript", "POO", "Jasmine Tests", "HTML5", "CSS3"],
      featured: true,
      category: "ecommerce",
      image: "/projects/amazonstyle.svg",
      imageAlt: "Amazon Style shopping cart and testing interface preview",
      demoUrl: "https://github.com/houda-z/amazon-style",
      githubUrl: "https://github.com/houda-z/javascript-amazon-project.git",
      highlights: [
        "Dynamic shopping cart logic developed with modular object-oriented JavaScript",
        "Comprehensive unit test suite implemented with Jasmine covering cart operations and calculations",
        "Interactive order summaries, responsive catalog display, and instant quantity modifiers"
      ]
    },

    {
      id: "customer-craft",
      title: "Customer Craft",
      subtitle: "Customer Relationship Management (CRM)",
      description:
        "A CRM application designed to help manage customers and prospects, organize client information, and streamline customer relationship management workflows.",
      technologies: [
        "React",
        "JavaScript",
        "CRM",
        "Git/GitHub"
      ],
      featured: true,
      category: "fullstack",
      image: "/projects/customer-craft.svg",
      imageAlt: "Customer Craft CRM application preview",
      demoUrl: "https://github.com/houda-z/CRM-Hub",
      githubUrl: "https://github.com/houda-z/CRM-Hub.git",
      highlights: [
        "Developed a CRM application focused on customer and prospect management",
        "Organized customer information to support efficient lead tracking and management",
        "Worked on frontend functionality and user interface development",
        "Applied version control practices during project development"
      ]
    }

  ],

  experienceSubtitle: "My academic background in Digital Development, hands-on internship experience, and practical projects have helped me build a foundation in Full Stack Web Development.",

  experience: [
    {
      id: "education",
      type: "education",
      typeLabel: "Education",
      role: "Specialized Technician Diploma in Digital Development — Full Stack Web Development",
      organization: "Institut Spécialisé de Technologie Appliquée NTIC, Sidi Youssef Ben Ali",
      period: "2024 – 2026",
      location: "Marrakech, Morocco",
      description: "Completed a two-year vocational training program focused on web development, programming, databases, and software development.",
      technologies: [],
      highlights: [
        "Learned frontend and backend web development fundamentals.",
        "Practiced object-oriented programming, database management, and application architecture.",
        "Developed web applications and practical projects using different programming technologies."
      ]
    },
    {
      id: "nuxera-internship",
      type: "internship",
      typeLabel: "Professional Experience",
      role: "Web Development Intern",
      organization: "Nuxera Group",
      period: "March 2026 – 1 month",
      location: "Marrakech, Morocco",
      description: "Completed a one-month internship in web development, working on a CRM application designed to manage clients and prospects.",
      technologies: ["React", "JavaScript", "PHP", "SQL", "Git", "GitHub"],
      highlights: [
        "Developed features for a customer and prospect management application.",
        "Worked on both frontend and backend functionality.",
        "Implemented application features and worked independently on assigned tasks."
      ]
    },
    {
      id: "academic-personal-projects",
      type: "project",
      typeLabel: "Projects",
      role: "Full Stack Web Development Projects",
      organization: "Academic & Personal Projects",
      period: "2024 – Present",
      location: "Marrakech, Morocco",
      description: "Built practical projects to strengthen my programming skills and apply the concepts learned during my training.",

      technologies: [
        "React",
        "Laravel",
        "TypeScript",
        "JavaScript",
        "PHP",
        "Python",
        "Tkinter",
        "SQL",
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "MVC Architecture",
        "Jasmine",
        "REST APIs",
        "Git",
        "GitHub"
      ],
      highlights: [
        "EduTrack: Collaborative academic management application built with React, Laravel, TypeScript, Bootstrap 5, and REST APIs.",
        "QuickCart: E-commerce application developed with PHP, object-oriented programming, MVC architecture, and SQL.",
        "Amazon Style: Interactive e-commerce application with JavaScript, object-oriented programming, and Jasmine unit tests.",
        "Customer Craft: CRM application focused on customer and prospect management, developed with React and JavaScript."
      ]

    }
  ],

  services: [
    {
      id: "service-responsive",
      iconClass: "bi-laptop",
      title: "Responsive Website Development",
      description: "Building modern, mobile-friendly websites that adjust seamlessly to smartphones, tablets, and desktop displays with fast load speeds.",
      deliverables: [
        "Mobile-first responsive layouts",
        "Cross-browser testing & compatibility",
        "Performance and image optimization",
        "Semantic, SEO-friendly HTML5 structure"
      ]
    },
    {
      id: "service-frontend",
      iconClass: "bi-code-slash",
      title: "Frontend Web Development",
      description: "Translating wireframes and UI designs into clean, reusable React and TypeScript components styled with Bootstrap 5 and modern CSS.",
      deliverables: [
        "React component hierarchy & architecture",
        "TypeScript type safety & error prevention",
        "Interactive state management & forms",
        "Clean, maintainable code structure"
      ]
    },
    {
      id: "service-ecommerce",
      iconClass: "bi-bag-check",
      title: "E-Commerce Website Creation",
      description: "Developing attractive, user-friendly online store interfaces with product catalogs, filtering, cart workflows, and clear calls to action.",
      deliverables: [
        "Product catalog and category showcases",
        "Dynamic cart and checkout user interface",
        "Client-side search and filtering",
        "Clear visual hierarchy to maximize conversions"
      ]
    },
    {
      id: "service-redesign",
      iconClass: "bi-brush",
      title: "Website Redesign & UI Implementation",
      description: "Revamping outdated web pages into sleek, professional designs with improved typography, spacing, navigation, and visual appeal.",
      deliverables: [
        "Modernized visual design & aesthetic alignment",
        "Improved navigation flow and user experience",
        "Accessible contrast and readable typography",
        "Component refactoring for easy future updates"
      ]
    }
  ]
};
