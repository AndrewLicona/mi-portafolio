interface NavLink {
  id: string;
  href: string;
  text: string;
}

export const navLinks: NavLink[] = [
  { id: 'home', href: "#inicio", text: "Inicio" },
  { id: 'about', href: "#sobre-mi", text: "Sobre mí" },
  { id: 'projects', href: "#proyectos", text: "Proyectos" },
  { id: 'skills', href: "#habilidades", text: "Habilidades" },
  { id: 'contact', href: "#contacto", text: "Contacto" },
];
