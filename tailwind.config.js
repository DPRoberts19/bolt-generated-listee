/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light themes
        'light-1': {
          primary: '#60a5fa',
          background: '#ffffff',
          text: '#1f2937',
        },
        'light-2': {
          primary: '#34d399',
          background: '#f9fafb',
          text: '#111827',
        },
        'light-3': {
          primary: '#f472b6',
          background: '#f8fafc',
          text: '#0f172a',
        },
        // Dark themes
        'dark-1': {
          primary: '#3b82f6',
          background: '#1f2937',
          text: '#f9fafb',
        },
        'dark-2': {
          primary: '#10b981',
          background: '#111827',
          text: '#f9fafb',
        },
        'dark-3': {
          primary: '#ec4899',
          background: '#0f172a',
          text: '#f8fafc',
        },
      },
    },
  },
  plugins: [],
}
