/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores base (se adaptan a dark/light mode)
        base: {
          DEFAULT: 'var(--color-base)',
          light: 'var(--color-base-light)',
          dark: 'var(--color-base-dark)',
        },
        // Color de acento dinámico (cambia según tema)
        accent: {
          DEFAULT: 'var(--accent-color)',
          blue: 'var(--color-accent-blue)',
          purple: 'var(--color-accent-purple)',
          green: 'var(--color-accent-green)',
          silver: 'var(--color-accent-silver)',
        },
        // Colores de texto (se adaptan a dark/light mode)
        text: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          strong: 'var(--color-text-strong)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}