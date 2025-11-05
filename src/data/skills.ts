// Las imágenes están en la carpeta public/ y se sirven desde la raíz
const imageBasePath = '/';

// Rutas de los SVG en la carpeta public/
const images = {
  html: `${imageBasePath}html-5-svgrepo-com.svg`,
  css: `${imageBasePath}css-svgrepo-com.svg`,
  js: `${imageBasePath}js-svgrepo-com.svg`,
  ts: `${imageBasePath}typescript-official-svgrepo-com.svg`,
  python: `${imageBasePath}python-svgrepo-com.svg`,
  nodejs: `${imageBasePath}nodejs-svgrepo-com.svg`,
  tailwind: `${imageBasePath}tailwind-svgrepo-com.svg`,
  git: `${imageBasePath}git-svgrepo-com.svg`,
  github: `${imageBasePath}github.svg`,
  docker: `${imageBasePath}docker-svgrepo-com.svg`,
  linux: `${imageBasePath}linux-tux-svgrepo-com.svg`,
  cloudflare: `${imageBasePath}cloudflare-svgrepo-com.svg`
};

interface Skill {
  id: string;
  name: string;
  imageUrl: string;
  category: 'language' | 'tool' | 'framework' | 'other';
}

interface SkillsByCategory {
  languages: Skill[];
  tools: Skill[];

}

export const skills: SkillsByCategory = {

  languages: [
    { id: 'html', name: "HTML", imageUrl: images.html, category: 'language' },
    { id: 'css', name: "CSS", imageUrl: images.css, category: 'language' },
    { id: 'js', name: "JavaScript", imageUrl: images.js, category: 'language' },
    { id: 'ts', name: "TypeScript", imageUrl: images.ts, category: 'language' },
    { id: 'python', name: "Python", imageUrl: images.python, category: 'language' },
  ],
  tools: [
    { id: 'nodejs', name: "Node.js", imageUrl: images.nodejs, category: 'tool' },
    { id: 'tailwind', name: "TailwindCSS", imageUrl: images.tailwind, category: 'tool' },
    { id: 'git', name: "Git", imageUrl: images.git, category: 'tool' },
    { id: 'github', name: "GitHub", imageUrl: images.github, category: 'tool' },
    { id: 'docker', name: "Docker", imageUrl: images.docker, category: 'tool' },
    { id: 'linux', name: "Linux", imageUrl: images.linux, category: 'tool' },
    { id: 'cloudflare', name: "Cloudflare", imageUrl: images.cloudflare, category: 'tool' },
  ],
};