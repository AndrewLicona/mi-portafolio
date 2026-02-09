// Importar imágenes
import pageServerImg from '../assets/page_server.png';
import dashboardYoutubeImg from '../assets/Dashboard.png';
// Placeholder: renombra tus capturas como estos nombres y colócalas en src/assets/
import tiendaVirtualImg from '../assets/Shopylink.png';
import controlGastosImg from '../assets/Niddoflow.png';

import type { ImageMetadata } from 'astro';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  imageUrl: ImageMetadata;
  githubUrl: string | null;
  demoUrl: string | null;
  status?: 'production' | 'development' | 'archived';
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: "Servidor Casero",
    description: "Construí un servidor con una PC portátil antigua para desplegar mis proyectos web utilizando Docker y Cloudflare.",
    technologies: ["Linux", "Docker", "Cloudflare", "Git", "GitHub"],
    imageUrl: pageServerImg,
    githubUrl: "https://github.com/AndrewLicona/server-page.git",
    demoUrl: "https://andrewlamaquina.my",
    status: 'production',
  },
  {
    id: 'proj-2',
    name: "YouTube Dashboard",
    description: "Dashboard interactivo para visualizar estadísticas y métricas de mi canal de YouTube en tiempo real.",
    technologies: ["Python", "Next.js", "YouTube API"],
    imageUrl: dashboardYoutubeImg,
    githubUrl: "https://github.com/AndrewLicona/dashboard-youtube.git",
    demoUrl: "https://dashboard.andrewlamaquina.my/dashboard/UCVrTKrp-wbORYB-gRQ5XoLQ",
    status: 'production',
  },
  {
    id: 'proj-3',
    name: "Tienda Virtual",
    description: "E-commerce completo con catálogo de productos, carrito de compras, gestión de pedidos y panel de administración.",
    technologies: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL"],
    imageUrl: tiendaVirtualImg,
    githubUrl: "https://github.com/AndrewLicona/ShopyLink.git",
    demoUrl: "https://shopylink.andrewlamaquina.my",
    status: 'production',
  },
  {
    id: 'proj-4',
    name: "Control de Gastos",
    description: "Aplicación web para gestionar finanzas personales: registrar ingresos, gastos, y visualizar estadísticas financieras.",
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    imageUrl: controlGastosImg,
    githubUrl: "https://github.com/AndrewLicona/NiddoFlow.git",
    demoUrl: "https://niddoflow.andrewlamaquina.my",
    status: 'production',
  },
];

