/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#142D5C',
          dark: '#0F1F3D',
        },
        gold: {
          DEFAULT: '#F2B736',
          dark: '#D49B1F',
        },
        slate: {
          accent: '#9CA0AA',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
