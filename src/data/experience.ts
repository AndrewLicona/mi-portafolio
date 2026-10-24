export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
  type: 'work' | 'education';
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Estudios de Ingeniería en Sistemas',
    company: 'Universidad / Formación Académica',
    period: '2021 - 2024',
    description: 'Adquisición de bases sólidas en ingeniería de software, estructuras de datos, algoritmos y arquitectura de sistemas.',
    highlights: [
      'Enfoque en patrones de diseño y buenas prácticas de programación.',
      'Desarrollo de proyectos colaborativos utilizando control de versiones.'
    ],
    skills: ['Algoritmos', 'Estructuras de Datos', 'POO', 'Git'],
    type: 'education'
  },
  {
    id: 'exp-2',
    role: 'Desarrollador Full Stack Junior',
    company: 'Proyectos Freelance & Personales',
    period: '2022 - 2024',
    description: 'Creación de aplicaciones web interactivas, e-commerce y dashboards con tecnologías modernas de desarrollo web.',
    highlights: [
      'Desarrollo de interfaces responsivas y optimizadas con Tailwind CSS.',
      'Integración de APIs de terceros y bases de datos relacionales y NoSQL.'
    ],
    skills: ['TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Node.js'],
    type: 'work'
  },
  {
    id: 'exp-3',
    role: 'Administrador de Infraestructura & DevOps',
    company: 'Homelab & Servidor Casero Personal',
    period: '2023 - 2025',
    description: 'Implementación y administración de servidor físico dedicado para despliegue de microservicios y herramientas internas.',
    highlights: [
      'Orquestación de servicios en contenedores mediante Docker.',
      'Configuración de túneles inversos y seguridad de red con Cloudflare.'
    ],
    skills: ['Linux', 'Docker', 'Cloudflare', 'Networking', 'Bash'],
    type: 'work'
  },
  {
    id: 'exp-4',
    role: 'Software Engineer & Cloud Specialist',
    company: 'Proyectos Avanzados / Producción',
    period: '2025 - Presente',
    description: 'Desarrollo de soluciones escalables en producción, optimización de rendimiento y despliegues automatizados.',
    highlights: [
      'Arquitectura de microservicios y despliegue continuo en entornos Linux.',
      'Gestión avanzada de bases de datos y seguridad web.'
    ],
    skills: ['Arquitectura Cloud', 'TypeScript', 'Docker', 'PostgreSQL', 'CI/CD'],
    type: 'work'
  }
];
