/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#142D5C',
          dark: '#0A1830',
          ink: '#0F1F3D',
        },
        gold: {
          DEFAULT: '#F2B736',
          dark: '#C99416',
          pale: '#F8E8B5',
          cream: '#FBF5DD',
        },
        paper: {
          DEFAULT: '#FAF7F0',
          warm: '#F2EDDF',
          soft: '#F8F4E8',
        },
        slate: {
          accent: '#9CA0AA',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', '"Times New Roman"', 'serif'],
        serif: ['"Fraunces"', '"Times New Roman"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        'super-wide': '0.25em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'draw-line': 'drawLine 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.7s both',
        marquee: 'marquee 50s linear infinite',
        'marquee-fast': 'marquee 28s linear infinite',
        'fade-in': 'fadeIn 1s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
};
