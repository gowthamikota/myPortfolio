/** @type {import('tailwindcss').Config} */
export default {
    content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
  theme: {
    extend: { animation: {
    'pulse-slow': 'pulse 6s ease-in-out infinite',
  },},
  },
  plugins: [],
  


}

