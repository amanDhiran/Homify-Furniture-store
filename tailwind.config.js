import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'overlay': 'linear-gradient(180deg, rgba(1,1,1,0.8) 0%, rgba(1,1,1,0) 30%, rgba(0,0,0,0) 90%, rgba(255,255,255,1) 100%)',
        'hero-image': 'url("https://www.ikea.com/images/a-living-room-with-a-white-3-seat-sofa-and-1-5-seat-armchair-1e3d903c4ecd85b235f9b6cb26ebc529.jpg?f=sg")'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(calc(-100% - 19px))' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
    },
  },
  plugins: [],
}



