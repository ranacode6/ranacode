import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.js',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        zoom: 'zoom 20s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        zoom: {
          '0%, 100%': { backgroundSize: '125%' },
          '50%': { backgroundSize: '150%' },
        },
      },
      backgroundImage: {
        WhyChooseUsBg: 'url(/images/services/why-choose-us-card-bg.png)',
        CaseHeroBg: 'url(/images/contact/hero-bg.png)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('daisyui'), require('@tailwindcss/typography')],
};
export default config;
