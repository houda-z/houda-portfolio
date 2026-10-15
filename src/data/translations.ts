import type { PortfolioData } from './portfolio';

export type Language = 'en' | 'fr' | 'ar';

export interface UiTranslations {
  skipLink: string;
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    services: string;
    contact: string;
    letsTalk: string;
    toggleMenuAria: string;
  };
  hero: {
    scriptOverlay: string;
    viewProjects: string;
    contactMe: string;
    portraitAlt: string;
  };
  about: {
    sectionTitle: string;
    statDiplomaNum: string;
    statDiplomaLabel: string;
    statFullStackNum: string;
    statFullStackLabel: string;
    statCleanCodeNum: string;
    statCleanCodeLabel: string;
    getInTouch: string;
    exploreGithub: string;
  };
  skills: {
    sectionTitle: string;
    sectionSubtitle: string;
    coreHighlightsAria: string;
    visualLabels: {
      reactUi: string;
      typescript: string;
      nodejs: string;
      phpApis: string;
      sqlDbs: string;
      gitWorkflow: string;
    };
  };
  projects: {
    sectionTitle: string;
    sectionSubtitle: string;
    filterAll: string;
    filterFullStack: string;
    filterEcommerce: string;
    sourceCode: string;
    sourceCodeTitle: string;
    categories: {
      fullstack: string;
      frontend: string;
      ecommerce: string;
    };
  };
  experience: {
    sectionTitle: string;
    sectionSubtitle: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    deliverablesHeading: string;
    ctaBanner: string;
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    cardTitle: string;
    directEmail: string;
    location: string;
  };
  footer: {
    quickLinks: string;
    connectSocial: string;
    socialTagline: string;
    footerBio: string;
    backToTop: string;
    copyright: string;
    standardsTagline: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export interface LanguagePack {
  portfolioData: PortfolioData;
  ui: UiTranslations;
}

export const translations: Record<Language, LanguagePack> = {
  en: {
    portfolioData: {
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
          technologies: ["React", "JavaScript", "PHP", "SQL", "Git/GitHub"],
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
            "Git/GitHub"
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
    },
    ui: {
      skipLink: "Skip to main content",
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        services: "Services",
        contact: "Contact",
        letsTalk: "Let's Talk",
        toggleMenuAria: "Toggle navigation menu"
      },
      hero: {
        scriptOverlay: "professional",
        viewProjects: "View My Projects",
        contactMe: "Contact Me",
        portraitAlt: "Portrait of Houda Zitouni"
      },
      about: {
        sectionTitle: "About me",
        statDiplomaNum: "Diploma",
        statDiplomaLabel: "Digital Development (Full Stack)",
        statFullStackNum: "Full Stack",
        statFullStackLabel: "Frontend & Backend integration",
        statCleanCodeNum: "Clean Code",
        statCleanCodeLabel: "Modern TypeScript & standards",
        getInTouch: "Get in Touch",
        exploreGithub: "Explore GitHub"
      },
      skills: {
        sectionTitle: "Skills",
        sectionSubtitle: "Core competencies across frontend development, backend logic, relational database systems, and modern collaborative tooling.",
        coreHighlightsAria: "Core Skill Highlights",
        visualLabels: {
          reactUi: "React UI",
          typescript: "TypeScript",
          nodejs: "Node.js",
          phpApis: "PHP & APIs",
          sqlDbs: "SQL DBs",
          gitWorkflow: "Git Workflow"
        }
      },
      projects: {
        sectionTitle: "Featured Projects",
        sectionSubtitle: "A selection of full stack, frontend, and e-commerce applications built with React, TypeScript, and modern web architectures.",
        filterAll: "All Projects",
        filterFullStack: "Full Stack",
        filterEcommerce: "E-Commerce",
        sourceCode: "Source Code",
        sourceCodeTitle: "Inspect project source code on GitHub",
        categories: {
          fullstack: "fullstack",
          frontend: "frontend",
          ecommerce: "ecommerce"
        }
      },
      experience: {
        sectionTitle: "Experience & Education",
        sectionSubtitle: "My academic background in Digital Development, hands-on internship experience, and practical projects have helped me build a foundation in Full Stack Web Development."
      },
      services: {
        sectionTitle: "Development Services",
        sectionSubtitle: "Focused, well-crafted web development solutions adhering to modern accessibility, responsiveness, and clean code standards.",
        deliverablesHeading: "Deliverables include:",
        ctaBanner: "Have a project in mind? Let's discuss"
      },
      contact: {
        sectionTitle: "Let's Connect & Collaborate",
        sectionSubtitle: "Whether you have an internship opportunity, a junior developer role, or a project in mind, my inbox is always open.",
        cardTitle: "Contact Information",
        directEmail: "Direct Email",
        location: "Location"
      },
      footer: {
        quickLinks: "Quick Links",
        connectSocial: "Connect & Social",
        socialTagline: "Explore my code repositories or reach out for professional inquiries.",
        footerBio: "focused on modern frontend engineering, backend REST endpoints, and accessible digital solutions.",
        backToTop: "Back to Top",
        copyright: "All rights reserved. Built with React, TypeScript & Bootstrap 5.",
        standardsTagline: "Designed with precision & modern web standards."
      },
      meta: {
        title: "Houda Zitouni | Junior Full Stack Web Developer",
        description: "Portfolio of Houda Zitouni, Junior Full Stack Web Developer. Specializing in modern React, TypeScript, Node.js, PHP, and responsive web applications."
      }
    }
  },

  fr: {
    portfolioData: {
      personal: {
        name: "Houda Zitouni",
        initials: "HZ",
        role: "Développeuse Web Full Stack Junior",
        subtitle: "Développement Digital & Technologies Web Modernes",
        shortIntro: "Bonjour, je suis Houda",
        heroHeadline: "Développeuse Web Full Stack Junior",
        heroBio: "Passionnée par la conception d'applications web réactives, intuitives et accessibles. Alliant formation en développement digital et technologies modernes frontend et backend pour produire un code propre et maintenable.",
        aboutParagraphs: [
          "Je suis une développeuse web Full Stack junior, diplômée en Développement Digital (option Développement Web Full Stack). Je dispose d'un solide socle de compétences pour la conception des interfaces côté client et la logique serveur, et j'aime donner vie aux maquettes à travers des applications web dynamiques et performantes.",
          "Mon parcours s'articule autour de la création d'interfaces ergonomiques avec React, TypeScript et Bootstrap, connectées à des architectures backend fiables avec Node.js, PHP et des bases de données relationnelles. Je suis animée par l'apprentissage continu, la rigueur d'un code documenté et la résolution de problématiques réelles."
        ],
        email: "houdazitouni93@gmail.com",
        phone: "",
        location: "Marrakech, Maroc",
        availability: "Disponible pour stages, postes junior et projets freelance",
        githubUrl: "https://github.com/houda-z",
        linkedinUrl: "https://www.linkedin.com/in/houda-zitouni-354a49247/",
        whatsappNumber: "",
        profileImage: "/profile.jpg",
        resumeDownloadUrl: "#contact"
      },

      heroPills: [
        "React & TypeScript",
        "Node.js & Express",
        "PHP & APIs REST",
        "Bootstrap 5",
        "Bases SQL",
        "Git & GitHub"
      ],

      skillsOverview: [
        { number: "1", title: "Ingénierie Frontend", bgClass: "pill-navy" },
        { number: "2", title: "Backend & APIs REST", bgClass: "pill-slate" },
        { number: "3", title: "Bases de données & SQL", bgClass: "pill-periwinkle" },
        { number: "4", title: "Contrôle de version & Git", bgClass: "pill-navy" },
        { number: "5", title: "UI/UX & Figma", bgClass: "pill-slate" },
        { number: "6", title: "Standards Web Modernes", bgClass: "pill-periwinkle" }
      ],

      skillCategories: [
        {
          id: "frontend",
          numberBadge: "01",
          title: "Développement Frontend",
          subtitle: "Création d'interfaces dynamiques, réactives et accessibles",
          colorClass: "navy",
          skills: [
            { name: "React", iconClass: "bi-filetype-jsx", description: "Composants réutilisables, hooks, gestion d'état et cycle de vie." },
            { name: "TypeScript", iconClass: "bi-filetype-tsx", description: "Typage statique, modélisation d'interfaces et sécurité au build." },
            { name: "JavaScript (ES6+)", iconClass: "bi-filetype-js", description: "Syntaxe moderne, async/await, manipulation DOM et fermetures." },
            { name: "HTML5", iconClass: "bi-filetype-html", description: "Balisage sémantique, optimisation SEO et accessibilité web." },
            { name: "CSS3", iconClass: "bi-filetype-css", description: "Flexbox, CSS Grid, media queries et animations fluides." },
            { name: "Bootstrap 5", iconClass: "bi-bootstrap", description: "Système de grille, utilitaires, ergonomie multi-écrans." }
          ]
        },
        {
          id: "backend",
          numberBadge: "02",
          title: "Développement Backend",
          subtitle: "Construction d'endpoints serveur fiables et logique applicative",
          colorClass: "slate",
          skills: [
            { name: "Node.js", iconClass: "bi-hdd-network", description: "Environnement serveur, écosystème npm et flux I/O asynchrones." },
            { name: "PHP", iconClass: "bi-filetype-php", description: "Scripting serveur, programmation orientée objet et pattern MVC." },
            {
              name: "Laravel", iconClass: "bi-code-slash", description: "Fondamentaux du framework, architecture MVC, routage, contrôleurs, Eloquent ORM et APIs REST."
            },
            { name: "APIs REST", iconClass: "bi-diagram-3", description: "Conception d'endpoints CRUD, codes d'état HTTP et formats JSON." }
          ]
        },
        {
          id: "database",
          numberBadge: "03",
          title: "Bases de Données",
          subtitle: "Modélisation relationnelle, requêtage et intégrité des données",
          colorClass: "periwinkle",
          skills: [
            { name: "SQL", iconClass: "bi-database", description: "Requêtes structurées, jointures, indexation et fonctions d'agrégation." },
            { name: "Bases Relationnelles", iconClass: "bi-database-check", description: "Schémas MySQL/PostgreSQL, intégrité référentielle, conception MCD." }
          ]
        },
        {
          id: "tools",
          numberBadge: "04",
          title: "Outils & Méthodes",
          subtitle: "Environnement de travail, suivi de version et collaboration",
          colorClass: "navy",
          skills: [
            { name: "Git", iconClass: "bi-git", description: "Gestion des branches, validation de commits et fusion sans conflit." },
            { name: "GitHub & GitLab", iconClass: "bi-github", description: "Dépôts distants, Pull Requests, revues de code et suivi des issues." },
            { name: "Figma", iconClass: "bi-brush", description: "Traduction maquette vers code, wireframing et tokens graphiques." },
            { name: "VS Code", iconClass: "bi-terminal", description: "Extensions, environnement de débogage et productivité moderne." }
          ]
        },
        {
          id: "additional",
          numberBadge: "05",
          title: "Technologies Complémentaires",
          subtitle: "Fondations logicielles complémentaires et bonnes pratiques",
          colorClass: "slate",
          skills: [
            { name: "Python", iconClass: "bi-filetype-py", description: "Bases algorithmiques, scripts d'automatisation et données." },
            { name: "Design Réactif", iconClass: "bi-phone", description: "Approche Mobile-First assurant un affichage idéal sur tout appareil." },
            { name: "Performance & A11y", iconClass: "bi-speedometer2", description: "Code structuré, temps de chargement optimisé et normes WCAG." }
          ]
        }
      ],

      projects: [
        {
          id: "edutrack",
          title: "EduTrack",
          subtitle: "Application Collaborative de Gestion Pédagogique",
          description: "Projet académique axé sur la gestion éducative, développé en collaboration pour fluidifier le suivi des dossiers scolaires et des progrès des étudiants.",
          technologies: ["React", "Laravel", "TypeScript", "Bootstrap 5", "APIs REST", "Git/GitHub"],
          featured: true,
          category: "fullstack",
          image: "/projects/edutrack.svg",
          imageAlt: "Aperçu du tableau de bord EduTrack",
          demoUrl: "https://github.com/houda-z/edutrack",
          githubUrl: "https://github.com/houda-z/EduTrack.git",
          highlights: [
            "Projet académique dédié à la gestion éducative, mené en équipe",
            "Tableaux de bord interactifs pour le suivi des cours, des progrès et des étapes clés",
            "Mise en pratique des flux de travail collaboratifs Git : branches, PRs et revues de code"
          ]
        },
        {
          id: "quickcart",
          title: "QuickCart",
          subtitle: "Application E-Commerce (PHP & MVC)",
          description: "Plateforme e-commerce conçue en PHP, programmation orientée objet, architecture MVC et base relationnelle SQL.",
          technologies: ["PHP", "POO", "Architecture MVC", "SQL", "HTML5/CSS3"],
          featured: true,
          category: "ecommerce",
          image: "/projects/quickcart.svg",
          imageAlt: "Aperçu de la vitrine e-commerce QuickCart",
          demoUrl: "https://github.com/houda-z/quickcart",
          githubUrl: "https://github.com/houda-z/Quick-cart.git",
          highlights: [
            "Conçu en PHP avec modélisation orientée objet et découplage MVC",
            "Base de données SQL pour catalogues produits, comptes utilisateurs et commandes",
            "Gestion dynamique du panier, suivi des stocks et tunnel de commande"
          ]
        },
        {
          id: "amazonstyle",
          title: "Amazon Style",
          subtitle: "Panier E-Commerce avec Tests Jasmine",
          description: "Interface e-commerce avec fonctionnalités de panier réalisée en JavaScript modulaire orienté objet et couverte par des tests unitaires Jasmine.",
          technologies: ["JavaScript", "POO", "Tests Jasmine", "HTML5", "CSS3"],
          featured: true,
          category: "ecommerce",
          image: "/projects/amazonstyle.svg",
          imageAlt: "Aperçu du panier et des tests de l'application",
          demoUrl: "https://github.com/houda-z/amazon-style",
          githubUrl: "https://github.com/houda-z/javascript-amazon-project.git",
          highlights: [
            "Logique dynamique de panier développée en JavaScript modulaire orienté objet",
            "Suite complète de tests unitaires Jasmine validant calculs et opérations du panier",
            "Récapitulatif interactif de commande, affichage réactif et mise à jour instantanée"
          ]
        },
        {
          id: "customer-craft",
          title: "Customer Craft",
          subtitle: "Gestion de la Relation Client (CRM)",
          description:
            "Application CRM dédiée à la gestion des clients et prospects, à l'organisation des coordonnées et à l'optimisation des flux de relation commerciale.",
          technologies: [
            "React",
            "JavaScript",
            "CRM",
            "Git/GitHub"
          ],
          featured: true,
          category: "fullstack",
          image: "/projects/customer-craft.svg",
          imageAlt: "Aperçu de l'application CRM Customer Craft",
          demoUrl: "https://github.com/houda-z/CRM-Hub",
          githubUrl: "https://github.com/houda-z/CRM-Hub.git",
          highlights: [
            "Conception d'une solution CRM axée sur le suivi des prospects et clients",
            "Structuration des données pour un suivi fluide et une gestion efficace des opportunités",
            "Développement des composants frontend et perfectionnement de l'interface utilisateur",
            "Application continue du versionnage Git durant le cycle de développement"
          ]
        }
      ],

      experienceSubtitle: "Mon cursus en Développement Digital, mon stage en entreprise et mes réalisations concrètes constituent les fondations de mes compétences en développement Full Stack.",

      experience: [
        {
          id: "education",
          type: "education",
          typeLabel: "Formation",
          role: "Diplôme de Technicien Spécialisé en Développement Digital — option Web Full Stack",
          organization: "Institut Spécialisé de Technologie Appliquée NTIC, Sidi Youssef Ben Ali",
          period: "2024 – 2026",
          location: "Marrakech, Maroc",
          description: "Formation professionnelle diplômante de deux ans axée sur le développement web, l'algorithmique, les bases de données et les architectures logicielles.",
          technologies: [],
          highlights: [
            "Maîtrise approfondie des fondamentaux du développement web frontend et backend.",
            "Pratique de la programmation orientée objet, gestion des bases relationnelles et conception MVC.",
            "Réalisation d'applications web et de projets concrets exploitant diverses technologies."
          ]
        },
        {
          id: "nuxera-internship",
          type: "internship",
          typeLabel: "Expérience Professionnelle",
          role: "Stagiaire Développeuse Web",
          organization: "Nuxera Group",
          period: "Mars 2026 – 1 mois",
          location: "Marrakech, Maroc",
          description: "Stage pratique d'un mois en développement web, contribution au développement d'un CRM conçu pour la gestion des clients et prospects.",
          technologies: ["React", "JavaScript", "PHP", "SQL", "Git/GitHub"],
          highlights: [
            "Développement de fonctionnalités pour une application de gestion de prospects et clients.",
            "Intervention conjointe sur les aspects frontend et la logique serveur backend.",
            "Mise en place de modules applicatifs et exécution autonome des missions attribuées."
          ]
        },
        {
          id: "academic-personal-projects",
          type: "project",
          typeLabel: "Projets",
          role: "Projets de Développement Web Full Stack",
          organization: "Projets Académiques & Personnels",
          period: "2024 – Présent",
          location: "Marrakech, Maroc",
          description: "Développement de projets concrets pour renforcer mes acquis techniques et appliquer les concepts clés abordés durant ma formation.",
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
            "Architecture MVC",
            "Jasmine",
            "APIs REST",
            "Git/GitHub"
          ],
          highlights: [
            "EduTrack : Application académique collaborative développée avec React, Laravel, TypeScript, Bootstrap 5 et APIs REST.",
            "QuickCart : Plateforme e-commerce conçue en PHP, programmation orientée objet, architecture MVC et SQL.",
            "Amazon Style : Interface e-commerce interactive avec JavaScript orienté objet et suite de tests unitaires Jasmine.",
            "Customer Craft : Application CRM dédiée à la gestion commerciale, développée avec React et JavaScript."
          ]
        }
      ],

      services: [
        {
          id: "service-responsive",
          iconClass: "bi-laptop",
          title: "Développement de Sites Web Réactifs",
          description: "Conception de sites web modernes adaptés aux mobiles, tablettes et ordinateurs, garantissant un rendu fluide et une vitesse optimale.",
          deliverables: [
            "Mises en page réactives pensées mobile-first",
            "Tests rigoureux et compatibilité multi-navigateurs",
            "Optimisation de la vitesse de chargement et des images",
            "Structure sémantique HTML5 favorable au référencement SEO"
          ]
        },
        {
          id: "service-frontend",
          iconClass: "bi-code-slash",
          title: "Développement Web Frontend",
          description: "Intégration fidèle de maquettes UI en composants React et TypeScript propres, modulaires et stylisés avec Bootstrap 5 et CSS moderne.",
          deliverables: [
            "Architecture organisée et composants React modulaires",
            "Sécurité du typage avec TypeScript et prévention d'erreurs",
            "Gestion d'états dynamiques et formulaires réactifs",
            "Code maintenable, propre et prêt pour la production"
          ]
        },
        {
          id: "service-ecommerce",
          iconClass: "bi-bag-check",
          title: "Création de Boutiques E-Commerce",
          description: "Développement d'interfaces de vente en ligne attrayantes avec catalogue de produits, filtres intuitifs, gestion du panier et parcours d'achat fluide.",
          deliverables: [
            "Vitrine produits et mise en valeur des catégories",
            "Panier d'achats dynamique et parcours de commande optimisé",
            "Moteur de recherche et filtres instantanés côté client",
            "Hiérarchie visuelle étudiée pour maximiser les conversions"
          ]
        },
        {
          id: "service-redesign",
          iconClass: "bi-brush",
          title: "Refonte & Modernisation de Sites",
          description: "Transformation de sites vieillissants en interfaces contemporaines et professionnelles avec typographie, espacements et ergonomie soignés.",
          deliverables: [
            "Modernisation graphique en adéquation avec votre identité",
            "Navigation clarifiée et expérience utilisateur fluidifiée",
            "Contraste accessible et lisibilité textuelle accrue",
            "Restructuration modulaire pour faciliter les évolutions futures"
          ]
        }
      ]
    },
    ui: {
      skipLink: "Passer au contenu principal",
      nav: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        experience: "Parcours",
        services: "Services",
        contact: "Contact",
        letsTalk: "Me Contacter",
        toggleMenuAria: "Ouvrir le menu de navigation"
      },
      hero: {
        scriptOverlay: "professionnelle",
        viewProjects: "Voir mes projets",
        contactMe: "Me contacter",
        portraitAlt: "Portrait de Houda Zitouni"
      },
      about: {
        sectionTitle: "À propos de moi",
        statDiplomaNum: "Diplôme",
        statDiplomaLabel: "Développement Digital (Full Stack)",
        statFullStackNum: "Full Stack",
        statFullStackLabel: "Intégration Frontend & Backend",
        statCleanCodeNum: "Code Propre",
        statCleanCodeLabel: "TypeScript moderne & standards",
        getInTouch: "Prendre contact",
        exploreGithub: "Explorer GitHub"
      },
      skills: {
        sectionTitle: "Compétences",
        sectionSubtitle: "Compétences clés en développement frontend, logique serveur backend, bases de données relationnelles et travail collaboratif.",
        coreHighlightsAria: "Points forts des compétences",
        visualLabels: {
          reactUi: "React UI",
          typescript: "TypeScript",
          nodejs: "Node.js",
          phpApis: "PHP & APIs",
          sqlDbs: "Bases SQL",
          gitWorkflow: "Flux Git"
        }
      },
      projects: {
        sectionTitle: "Projets Réalisés",
        sectionSubtitle: "Une sélection d'applications full stack, frontend et e-commerce conçues avec React, TypeScript et des architectures modernes.",
        filterAll: "Tous les projets",
        filterFullStack: "Full Stack",
        filterEcommerce: "E-Commerce",
        sourceCode: "Code Source",
        sourceCodeTitle: "Consulter le code source du projet sur GitHub",
        categories: {
          fullstack: "fullstack",
          frontend: "frontend",
          ecommerce: "e-commerce"
        }
      },
      experience: {
        sectionTitle: "Parcours & Formations",
        sectionSubtitle: "Mon cursus en Développement Digital, mon stage en entreprise et mes réalisations concrètes constituent les fondations de mes compétences en développement Full Stack."
      },
      services: {
        sectionTitle: "Services Proposés",
        sectionSubtitle: "Des solutions web soignées et ciblées, conformes aux exigences modernes d'accessibilité, d'ergonomie et de propreté du code.",
        deliverablesHeading: "Livrables inclus :",
        ctaBanner: "Un projet en tête ? Échangeons ensemble"
      },
      contact: {
        sectionTitle: "Connectons-nous & Collaborons",
        sectionSubtitle: "Que vous ayez une opportunité de stage, un poste junior ou un projet à me confier, ma boîte de réception est ouverte.",
        cardTitle: "Coordonnées",
        directEmail: "Email Direct",
        location: "Localisation"
      },
      footer: {
        quickLinks: "Liens Rapides",
        connectSocial: "Réseaux & Échanges",
        socialTagline: "Découvrez mes dépôts de code ou contactez-moi pour toute opportunité professionnelle.",
        footerBio: "axée sur l'ingénierie frontend moderne, les API REST fiables et des solutions numériques accessibles.",
        backToTop: "Retour en haut",
        copyright: "Tous droits réservés. Conçu avec React, TypeScript & Bootstrap 5.",
        standardsTagline: "Conçu avec précision selon les standards web modernes."
      },
      meta: {
        title: "Houda Zitouni | Développeuse Web Full Stack Junior",
        description: "Portfolio de Houda Zitouni, Développeuse Web Full Stack Junior. Spécialisée en React, TypeScript, Node.js, PHP et applications web réactives."
      }
    }
  },

  ar: {
    portfolioData: {
      personal: {
        name: "Houda Zitouni",
        initials: "HZ",
        role: "مطورة ويب فول ستاك مبتدئة",
        subtitle: "التطوير الرقمي وتقنيات الويب الحديثة",
        shortIntro: "مرحباً، أنا هدى",
        heroHeadline: "مطورة ويب فول ستاك مبتدئة",
        heroBio: "شغوفة ببناء تطبيقات ويب متجاوبة، سهلة الاستخدام ومتاحة للجميع. أجمع بين التكوين المتخصص في التطوير الرقمي وأحدث تقنيات الواجهات الأمامية والخلفيات البرمجية لتقديم كود نظيف وقابل للصيانة.",
        aboutParagraphs: [
          "أنا مطورة ويب فول ستاك مبتدئة حاصلة على دبلوم تقني متخصص في التطوير الرقمي (خيار تطوير الويب المتكامل). أمتلك أساساً متيناً في تصميم وتطوير واجهات المستخدم والمنطق البرمجي للخلفية، وأهوى تحويل النماذج والمخططات التصميمية إلى تطبيقات ويب تفاعلية عالية الأداء.",
          "يرتكز مساري على تصميم واجهات ويب متجاوبة وسهلة الوصول باستخدام React وTypeScript وBootstrap، مع ربطها ببنى تحتية قوية للخوادم بواسطة Node.js وPHP وقواعد البيانات العلائقية. يحفزني باستمرار التعلم المتواصل، وكتابة كود نظيف وموثق، وحل التحديات الواقعية."
        ],
        email: "houdazitouni93@gmail.com",
        phone: "",
        location: "مراكش، المغرب",
        availability: "متاحة لفرص التدريب، الوظائف المبتدئة، ومشاريع العمل الحر",
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
        "قواعد بيانات SQL",
        "Git & GitHub"
      ],

      skillsOverview: [
        { number: "1", title: "هندسة الواجهات الأمامية", bgClass: "pill-navy" },
        { number: "2", title: "الخلفية البرمجية وAPIs", bgClass: "pill-slate" },
        { number: "3", title: "قواعد البيانات وSQL", bgClass: "pill-periwinkle" },
        { number: "4", title: "إدارة الإصدارات وGit", bgClass: "pill-navy" },
        { number: "5", title: "تصميم الواجهات وFigma", bgClass: "pill-slate" },
        { number: "6", title: "معايير الويب الحديثة", bgClass: "pill-periwinkle" }
      ],

      skillCategories: [
        {
          id: "frontend",
          numberBadge: "01",
          title: "تطوير الواجهات الأمامية",
          subtitle: "بناء واجهات مستخدم تفاعلية، متجاوبة وسهلة الوصول",
          colorClass: "navy",
          skills: [
            { name: "React", iconClass: "bi-filetype-jsx", description: "مكونات قابلة لإعادة الاستخدام، خطافات Hooks، إدارة الحالة ودورة الحياة." },
            { name: "TypeScript", iconClass: "bi-filetype-tsx", description: "تحديد دقيق للأنماط، نمذجة الواجهات، وأمان أثناء البناء والتجميع." },
            { name: "JavaScript (ES6+)", iconClass: "bi-filetype-js", description: "بنية لغوية حديثة، المعالجة غير المتزامنة async/await، والتفاعل مع DOM." },
            { name: "HTML5", iconClass: "bi-filetype-html", description: "هيكلة دلالية، تحسين محركات البحث SEO، وتوافق إمكانية الوصول." },
            { name: "CSS3", iconClass: "bi-filetype-css", description: "تخطيطات Flexbox وCSS Grid، استعلامات التجاوب، والتحريكات." },
            { name: "Bootstrap 5", iconClass: "bi-bootstrap", description: "نظام الشبكة، الأدوات المساعدة، التنسيق المتجاوب، والمكونات الجاهزة." }
          ]
        },
        {
          id: "backend",
          numberBadge: "02",
          title: "تطوير الواجهات الخلفية",
          subtitle: "بناء نقاط نهاية خادم موثوقة ومنطق عمل التطبيقات",
          colorClass: "slate",
          skills: [
            { name: "Node.js", iconClass: "bi-hdd-network", description: "بيئة تشغيل الخادم، حزم npm، ومعالجة المدخلات والمخرجات غير المتزامنة." },
            { name: "PHP", iconClass: "bi-filetype-php", description: "البرمجة من جانب الخادم، البرمجة كائنية التوجه OOP، ونمط MVC." },
            {
              name: "Laravel", iconClass: "bi-code-slash", description: "أساسيات إطار العمل، معمارية MVC، التوجيه، المتحكمات، Eloquent ORM، وتطوير REST APIs."
            },
            { name: "REST APIs", iconClass: "bi-diagram-3", description: "تصميم نقاط CRUD، رموز الحالة HTTP، وتبادل البيانات بصيغة JSON." }
          ]
        },
        {
          id: "database",
          numberBadge: "03",
          title: "قواعد البيانات",
          subtitle: "نمذجة البيانات العلائقية، كتابة الاستعلامات، وضمان تكامل التخزين",
          colorClass: "periwinkle",
          skills: [
            { name: "SQL", iconClass: "bi-database", description: "استعلامات مهيكلة، عمليات الربط Joins، الفهرسة، والدوال التجميعية." },
            { name: "قواعد البيانات العلائقية", iconClass: "bi-database-check", description: "مخططات MySQL/PostgreSQL، المفاتيح الأساسية والأجنبية، وتصميم ERD." }
          ]
        },
        {
          id: "tools",
          numberBadge: "04",
          title: "الأدوات ومنهجية العمل",
          subtitle: "بيئة التطوير المتكاملة، إدارة الإصدارات، والعمل التعاوني",
          colorClass: "navy",
          skills: [
            { name: "Git", iconClass: "bi-git", description: "إدارة الفروع، تسجيل التعديلات Commits، وحل تعارضات الدمج." },
            { name: "GitHub & GitLab", iconClass: "bi-github", description: "المستودعات، طلبات السحب Pull Requests، مراجعة الكود، وتتبع المهام." },
            { name: "Figma", iconClass: "bi-brush", description: "تحويل التصاميم إلى كود برمجي، إعداد المخططات، ورموز واجهة المستخدم." },
            { name: "VS Code", iconClass: "bi-terminal", description: "الملحقات البرمجية، تصحيح الأخطاء، وأدوات المطور الحديثة." }
          ]
        },
        {
          id: "additional",
          numberBadge: "05",
          title: "تقنيات إضافية",
          subtitle: "أسس برمجية تكميلية وأفضل المعايير المهنية",
          colorClass: "slate",
          skills: [
            { name: "Python", iconClass: "bi-filetype-py", description: "أساسيات البرمجة، كتابة السكربتات، والتعامل الأولي مع البيانات." },
            { name: "التصميم المتجاوب", iconClass: "bi-phone", description: "تنسيقات تبدأ بالهاتف المحمول لضمان عرض مثالي عبر كافة الشاشات." },
            { name: "الأداء وسهولة الوصول", iconClass: "bi-speedometer2", description: "كود برمجي منظم، سرعة التحميل، ومراعاة معايير WCAG." }
          ]
        }
      ],

      projects: [
        {
          id: "edutrack",
          title: "EduTrack",
          subtitle: "تطبيق تعاوني لإدارة المسار الأكاديمي",
          description: "مشروع دراسي يركز على الإدارة التعليمية، تم تطويره بتعاون جماعي لتسهيل تنظيم السجلات الأكاديمية وتتبع تقدم الطلاب.",
          technologies: ["React", "Laravel", "TypeScript", "Bootstrap 5", "REST APIs", "Git/GitHub"],
          featured: true,
          category: "fullstack",
          image: "/projects/edutrack.svg",
          imageAlt: "معاينة للوحة تحكم تطبيق EduTrack",
          demoUrl: "https://github.com/houda-z/edutrack",
          githubUrl: "https://github.com/houda-z/EduTrack.git",
          highlights: [
            "مشروع أكاديمي مخصص للإدارة التعليمية تم تنفيذه في إطار عمل جماعي",
            "لوحات تحكم تفاعلية لتتبع المقررات، التطور الدراسي، والمحطات الأكاديمية",
            "ممارسة سير العمل الجماعي بـ Git عبر الفروع وطلبات الدمج ومراجعة الكود"
          ]
        },
        {
          id: "quickcart",
          title: "QuickCart",
          subtitle: "تطبيق متجر إلكتروني (PHP وMVC)",
          description: "تطبيق تجارة إلكترونية متكامل مطور بلغة PHP، البرمجة كائنية التوجه، معمارية MVC، وقواعد بيانات SQL.",
          technologies: ["PHP", "POO", "معمارية MVC", "SQL", "HTML5/CSS3"],
          featured: true,
          category: "ecommerce",
          image: "/projects/quickcart.svg",
          imageAlt: "معاينة واجهة متجر QuickCart",
          demoUrl: "https://github.com/houda-z/quickcart",
          githubUrl: "https://github.com/houda-z/Quick-cart.git",
          highlights: [
            "مطور بلغة PHP باعتماد البرمجة الكائنية وتطبيق مبادئ نمط MVC",
            "قاعدة بيانات علائقية SQL لكتالوج المنتجات، حسابات الزبائن، والطلبيات",
            "سلة تسوق ديناميكية، إدارة المخزون، ومسار دفع متكامل"
          ]
        },
        {
          id: "amazonstyle",
          title: "Amazon Style",
          subtitle: "سلة تسوق تجارة إلكترونية مع اختبارات Jasmine",
          description: "واجهة متجر إلكتروني تفاعلية مع سلة مشتريات مطورة بلغة JavaScript كائنية التوجه ومدعومة باختبارات Jasmine البرمجية.",
          technologies: ["JavaScript", "POO", "اختبارات Jasmine", "HTML5", "CSS3"],
          featured: true,
          category: "ecommerce",
          image: "/projects/amazonstyle.svg",
          imageAlt: "معاينة سلة الشراء والاختبارات للتطبيق",
          demoUrl: "https://github.com/houda-z/amazon-style",
          githubUrl: "https://github.com/houda-z/javascript-amazon-project.git",
          highlights: [
            "منطق سلة تسوق ديناميكي ومبني باستخدام JavaScript كائني التوجه",
            "حزمة اختبارات وحدوية شاملة بـ Jasmine لتغطية عمليات السلة وحساب التكاليف",
            "ملخصات تفاعلية للطلبات، عرض متجاوب للكتالوج، وتعديل فوري للكميات"
          ]
        },
        {
          id: "customer-craft",
          title: "Customer Craft",
          subtitle: "إدارة علاقات العملاء (CRM)",
          description:
            "تطبيق CRM مصمم لتنظيم ومتابعة بيانات الزبائن والعملاء المحتملين، وتسهيل سير العمل في إدارة علاقات العملاء.",
          technologies: [
            "React",
            "JavaScript",
            "CRM",
            "Git/GitHub"
          ],
          featured: true,
          category: "fullstack",
          image: "/projects/customer-craft.svg",
          imageAlt: "معاينة لتطبيق إدارة علاقات العملاء Customer Craft",
          demoUrl: "https://github.com/houda-z/CRM-Hub",
          githubUrl: "https://github.com/houda-z/CRM-Hub.git",
          highlights: [
            "تطوير تطبيق CRM يركز على تتبع الزبائن والعملاء المحتملين",
            "تنظيم سجلات العملاء لدعم المتابعة الفعالة وإدارة الفرص التجارية",
            "بناء وظائف الواجهة الأمامية وتطوير تجربة المستخدم",
            "الالتزام بممارسات التحكم في الإصدارات بـ Git خلال تطوير المشروع"
          ]
        }
      ],

      experienceSubtitle: "ساهم تكويني الأكاديمي في التطوير الرقمي، وتجربة التدريب الميداني، والمشاريع التطبيقية في بناء أساس متين في تطوير الويب المتكامل.",

      experience: [
        {
          id: "education",
          type: "education",
          typeLabel: "تكوين ودراسة",
          role: "دبلوم تقني متخصص في التطوير الرقمي — خيار تطوير الويب المتكامل",
          organization: "المعهد المتخصص للتكنولوجيا التطبيقية NTIC، سيدي يوسف بن علي",
          period: "2024 – 2026",
          location: "مراكش، المغرب",
          description: "برنامج تكوين مهني لمدة سنتين يركز على تطوير الويب، الخوارزميات، قواعد البيانات، وهندسة البرمجيات.",
          technologies: [],
          highlights: [
            "إتقان أساسيات تطوير الويب للواجهات الأمامية والخلفيات البرمجية.",
            "ممارسة البرمجة كائنية التوجه، إدارة قواعد البيانات، وتصميم هياكل التطبيقات.",
            "تطوير تطبيقات ويب ومشاريع تطبيقية باستخدام تقنيات برمجية حديثة ومتنوعة."
          ]
        },
        {
          id: "nuxera-internship",
          type: "internship",
          typeLabel: "خبرة مهنية",
          role: "متدربة في تطوير الويب",
          organization: "Nuxera Group",
          period: "مارس 2026 – شهر واحد",
          location: "مراكش، المغرب",
          description: "تدريب ميداني لمدة شهر في تطوير الويب، والمشاركة في تطوير تطبيق CRM لإدارة العملاء والعملاء المحتملين.",
          technologies: ["React", "JavaScript", "PHP", "SQL", "Git/GitHub"],
          highlights: [
            "تطوير ميزات مخصصة لتطبيق إدارة العملاء والزبائن المحتملين.",
            "العمل على وظائف الواجهة الأمامية والمنطق البرمجي للخلفية.",
            "تنفيذ متطلبات التطبيق والعمل باستقلالية على المهام الموكلة."
          ]
        },
        {
          id: "academic-personal-projects",
          type: "project",
          typeLabel: "مشاريع",
          role: "مشاريع تطوير الويب المتكامل Full Stack",
          organization: "مشاريع دراسية وشخصية",
          period: "2024 – حتى الآن",
          location: "مراكش، المغرب",
          description: "بناء مشاريع تطبيقية لتطوير المهارات البرمجية وترسيخ المفاهيم المكتسبة أثناء فترة التكوين.",
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
            "معمارية MVC",
            "Jasmine",
            "REST APIs",
            "Git/GitHub"
          ],
          highlights: [
            "EduTrack: تطبيق تعاوني لإدارة المسار الأكاديمي مبني بـ React وLaravel وTypeScript وBootstrap 5 وREST APIs.",
            "QuickCart: تطبيق متجر إلكتروني مطور بلغة PHP والبرمجة الكائنية ومعمارية MVC وSQL.",
            "Amazon Style: تطبيق تجارة إلكترونية تفاعلي بـ JavaScript الكائنية واختبارات Jasmine الوحدوية.",
            "Customer Craft: تطبيق CRM مخصص لإدارة العملاء مطور بـ React وJavaScript."
          ]
        }
      ],

      services: [
        {
          id: "service-responsive",
          iconClass: "bi-laptop",
          title: "تطوير مواقع ويب متجاوبة",
          description: "بناء مواقع ويب عصرية وسريعة متوافقة كلياً مع الهواتف الذكية، الأجهزة اللوحية، والشاشات المكتبية.",
          deliverables: [
            "تنسيقات متجاوبة ترتكز على الهواتف المحمولة Mobile-first",
            "اختبارات شاملة وتوافق مع جميع المتصفحات الحديثة",
            "تحسين سرعة التحميل وضغط الوسائط الرقمية",
            "هيكلية HTML5 دلالية مهيأة لمحركات البحث SEO"
          ]
        },
        {
          id: "service-frontend",
          iconClass: "bi-code-slash",
          title: "تطوير واجهات الويب الأمامية",
          description: "تحويل التصاميم والنماذج إلى مكونات React وTypeScript نظيفة وقابلة لإعادة الاستخدام مع Bootstrap 5 وCSS الحديث.",
          deliverables: [
            "بنية معمارية متقنة لمكونات React القابلة لإعادة الاستخدام",
            "أمان الأنماط البرمجية بـ TypeScript لتفادي الأخطاء",
            "إدارة تفاعلية للحالة ونماذج الإدخال السلسة",
            "كود برمجي نقي ومنظم وقابل للتطوير المستقبلي"
          ]
        },
        {
          id: "service-ecommerce",
          iconClass: "bi-bag-check",
          title: "إنشاء مواقع المتاجر الإلكترونية",
          description: "تطوير واجهات متاجر إلكترونية جذابة وعملية تشتمل على كتالوج المنتجات، الفلترة الذكية، سلة التسوق وتجربة دفع واضحة.",
          deliverables: [
            "عرض احترافي لكتالوج المنتجات وتصنيفاتها",
            "سلة تسوق ديناميكية وتجربة شراء سلسة وواضحة",
            "بحث وتصفية سريعة للمنتجات من جانب العميل",
            "تسلسل بصري متوازن لزيادة معدل تحويل الزوار إلى زبائن"
          ]
        },
        {
          id: "service-redesign",
          iconClass: "bi-brush",
          title: "تحديث وتطوير المواقع القائمة",
          description: "تجديد المواقع القديمة وتحويلها إلى واجهات عصرية واحترافية مع ضبط الخطوط، المسافات، والتنقل البصري.",
          deliverables: [
            "تحديث المظهر الجمالي بما يعكس هوية عصرية متكاملة",
            "تحسين تدفق التنقل والارتقاء بتجربة المستخدم UX",
            "مراعاة التباين اللوني المريح والخطوط سهلة القراءة",
            "إعادة هيكلة المكونات البرمجية لتسهيل التحديثات اللاحقة"
          ]
        }
      ]
    },
    ui: {
      skipLink: "الانتقال إلى المحتوى الرئيسي",
      nav: {
        home: "الرئيسية",
        about: "عني",
        skills: "المهارات",
        projects: "المشاريع",
        experience: "المسار والخبرات",
        services: "الخدمات",
        contact: "التواصل",
        letsTalk: "تواصل معي",
        toggleMenuAria: "تبديل قائمة التنقل"
      },
      hero: {
        scriptOverlay: "احترافي",
        viewProjects: "عرض مشاريعي",
        contactMe: "تواصل معي",
        portraitAlt: "صورة هدى زيتوني"
      },
      about: {
        sectionTitle: "نبذة عني",
        statDiplomaNum: "دبلوم",
        statDiplomaLabel: "التطوير الرقمي (Full Stack)",
        statFullStackNum: "فول ستاك",
        statFullStackLabel: "تكامل الواجهات والخوادم",
        statCleanCodeNum: "كود نظيف",
        statCleanCodeLabel: "معايير حديثة وTypeScript",
        getInTouch: "ابدأ التواصل",
        exploreGithub: "استكشف GitHub"
      },
      skills: {
        sectionTitle: "المهارات",
        sectionSubtitle: "الكفاءات الأساسية في تطوير الواجهات الأمامية، المنطق البرمجي للخلفية، قواعد البيانات العلائقية، وأحدث أدوات العمل الجماعي.",
        coreHighlightsAria: "أبرز المهارات الأساسية",
        visualLabels: {
          reactUi: "واجهات React",
          typescript: "TypeScript",
          nodejs: "Node.js",
          phpApis: "PHP وAPIs",
          sqlDbs: "قواعد SQL",
          gitWorkflow: "منهجية Git"
        }
      },
      projects: {
        sectionTitle: "مشاريع مميزة",
        sectionSubtitle: "مجموعة مختارة من تطبيقات الويب المتكاملة، الواجهات الأمامية، والمتاجر الإلكترونية المطورة بـ React وTypeScript وبنى الويب الحديثة.",
        filterAll: "جميع المشاريع",
        filterFullStack: "فول ستاك",
        filterEcommerce: "تجارة إلكترونية",
        sourceCode: "كود المصدر",
        sourceCodeTitle: "معاينة كود المشروع على GitHub",
        categories: {
          fullstack: "فول ستاك",
          frontend: "واجهة أمامية",
          ecommerce: "تجارة إلكترونية"
        }
      },
      experience: {
        sectionTitle: "الخبرات والمسار التعليمي",
        sectionSubtitle: "ساهم تكويني الأكاديمي في التطوير الرقمي، وتجربة التدريب الميداني، والمشاريع التطبيقية في بناء أساس متين في تطوير الويب المتكامل."
      },
      services: {
        sectionTitle: "خدمات التطوير",
        sectionSubtitle: "حلول برمجية متقنة وموجهة تلبي أحدث معايير التوافق، وسهولة الوصول، والكود النظيف.",
        deliverablesHeading: "تشمل المخرجات:",
        ctaBanner: "هل لديك فكرة مشروع؟ فلنتناقش"
      },
      contact: {
        sectionTitle: "لنتواصل ونتعاون",
        sectionSubtitle: "سواء كانت لديك فرصة تدريب، دور لمطورة مبتدئة، أو فكرة مشروع، فإن بريدي الإلكتروني متاح دائماً لاستقبال رسالتك.",
        cardTitle: "معلومات التواصل",
        directEmail: "البريد الإلكتروني المباشر",
        location: "الموقع الجغرافي"
      },
      footer: {
        quickLinks: "روابط سريعة",
        connectSocial: "التواصل والشبكات",
        socialTagline: "استكشف مستودعات الأكواد الخاصة بي أو تواصل معي لأي استفسار مهني.",
        footerBio: "تركز على هندسة الواجهات الأمامية الحديثة، وواجهات برمجة REST، والحلول الرقمية المتاحة للجميع.",
        backToTop: "العودة للأعلى",
        copyright: "جميع الحقوق محفوظة. مطور بواسطة React وTypeScript وBootstrap 5.",
        standardsTagline: "صُمم بدقة ووفقاً لأحدث معايير الويب."
      },
      meta: {
        title: "هدى زيتوني | مطورة ويب فول ستاك مبتدئة",
        description: "معرض أعمال هدى زيتوني، مطورة ويب فول ستاك مبتدئة متخصصة في React وTypeScript وNode.js وPHP وتطبيقات الويب المتجاوبة."
      }
    }
  }
};
