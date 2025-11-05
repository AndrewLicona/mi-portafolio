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
    { id: 'html', name: "HTML", imageUrl: "/html-5-svgrepo-com.svg", category: 'language',  },
    { id: 'css', name: "CSS", imageUrl: "/css-svgrepo-com.svg", category: 'language',  },
    { id: 'js', name: "JavaScript", imageUrl: "/js-svgrepo-com.svg", category: 'language',  },
    { id: 'ts', name: "TypeScript", imageUrl: "/typescript-official-svgrepo-com.svg", category: 'language',  },
    { id: 'python', name: "Python", imageUrl: "/python-svgrepo-com.svg", category: 'language',  },
  ],
  tools: [
    { id: 'nodejs', name: "Node.js", imageUrl: "/nodejs-svgrepo-com.svg", category: 'tool',  },
    { id: 'tailwind', name: "TailwindCSS", imageUrl: "/tailwind-svgrepo-com.svg", category: 'tool',  },
    { id: 'git', name: "Git", imageUrl: "/git-svgrepo-com.svg", category: 'tool',  },
    { id: 'github', name: "GitHub", imageUrl: "/github.svg", category: 'tool',  },
    { id: 'docker', name: "Docker", imageUrl: "/docker-svgrepo-com.svg", category: 'tool',  },
    { id: 'linux', name: "Linux", imageUrl: "/linux-tux-svgrepo-com.svg", category: 'tool',  },
    { id: 'cloudflare', name: "Cloudflare", imageUrl: "/cloudflare-svgrepo-com.svg", category: 'tool',  },
  ],
};