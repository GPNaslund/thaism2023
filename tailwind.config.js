/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'h-950': {'raw': '(min-height: 950px)'},
        'h-779': {'raw': '(min-height: 779px)'},
        'h-720': {'raw': '(min-height: 720px)'},
        'h-740': {'raw': '(min-height: 740px)'},
        'h-950': {'raw': '(min-height: 950px)'},
      },
      colors: {
        'custom-green-1': '#BED747',
        'custom-green-2': '#C7D09C',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
