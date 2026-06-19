/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7C3AED',
          pink: '#EC4899',
        },
        page: '#F8F9FB',
        card: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
