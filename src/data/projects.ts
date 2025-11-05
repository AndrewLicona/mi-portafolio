interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string | null;
  demoUrl: string | null;
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: "Servidor Casero",
    description: "Construí un servidor con un pc portatil viejo para desplegar mis proyectos.",
    technologies: ["Linux", "Docker", "cloudflare", "git", "github"],
    imageUrl: "src/assets/page_server.png",
    githubUrl: "https://github.com/AndrewLicona/server-page.git",
    demoUrl: "https://andrewlamaquina.my",
  },
  {
    id: 'proj-2',
    name: "AJDREW-APP",
    description: "(en desarrollo)Un sistema de calificacion con rackings como extencion de interacion de mi canal de youtube.",
    technologies: ["Next.js", "nestjs","TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    imageUrl: "src/assets/ajdrew_app.png",
    githubUrl: "https://github.com/AndrewLicona/ajdrew-app.git",
    demoUrl: null,
  },
  {
    id: 'proj-3',
    name: "Youtube Dashboard",
    description: "Cree un dashboard para ver estadísticas de mi canal de youtube.",
    technologies: ["Python", "Streamlit" ,"youtube", "api"],
    imageUrl: "src/assets/dashboard_youtube.png",
    githubUrl: "https://github.com/AndrewLicona/dashboard-youtube.git",
    demoUrl: "https://dashboard.andrewlamaquina.my",
  },
];
