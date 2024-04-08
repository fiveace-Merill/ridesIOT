/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'robin_egg_blue': {
          DEFAULT: '#0DC9CE',
          100: '#032829',
          200: '#055052',
          300: '#08787c',
          400: '#0ba0a5',
          500: '#0dc9ce',
          600: '#24eaf1',
          700: '#5beff5',
          800: '#92f5f8',
          900: '#c8fafc'
        },
        'light_cyan': {
          DEFAULT: '#C8E7E8',
          100: '#1a3c3d',
          200: '#33787a',
          300: '#4fb2b5',
          400: '#8ccdcf',
          500: '#c8e7e8',
          600: '#d4eced',
          700: '#dff1f1',
          800: '#e9f6f6',
          900: '#f4fafa'
        },
        'brunswick_green': {
          DEFAULT: '#174835',
          100: '#050f0b',
          200: '#091d16',
          300: '#0e2c21',
          400: '#133b2b',
          500: '#174835',
          600: '#2b8865',
          700: '#43c492',
          800: '#81d7b6',
          900: '#c0ebdb'
        },
        'rich_black': {
          DEFAULT: '#031D29',
          100: '#010609',
          200: '#010c11',
          300: '#02121a',
          400: '#031822',
          500: '#031d29',
          600: '#0a5b81',
          700: '#1098d7',
          800: '#52bff2',
          900: '#a9dff9'
        },
        'forest_green': {
          DEFAULT: '#379637',
          100: '#0b1e0b',
          200: '#163c16',
          300: '#215921',
          400: '#2c772c',
          500: '#379637',
          600: '#4cbd4c',
          700: '#79cd79',
          800: '#a6dea6',
          900: '#d2eed2'
        }
      }
    },
  },
  plugins: [],
}
