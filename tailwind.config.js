/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'emergency': {
          critical: '#dc2626',
          high: '#ea580c',
          medium: '#eab308',
          low: '#22c55e',
        },
        'mesh': {
          active: '#06b6d4',
          relay: '#8b5cf6',
          gateway: '#f59e0b',
        }
      },
    },
  },
  plugins: [],
}
