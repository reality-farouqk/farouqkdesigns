/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        bg: 'var(--color-bg)',
        fg: 'var(--color-foreground)',
        header: 'var(--color-header)',
        dark: 'var(--color-dark)',
        muted: 'var(--color-muted)',
        surface: 'var(--color-surface)',
        danger: 'var(--color-danger)',
        dangerDark: 'var(--color-danger-dark)',
        link: 'var(--color-link)',
        hoverBlue: 'var(--color-hover-blue)',
        footer: 'var(--color-footer)',
        shadowAccent: 'var(--color-shadow-accent)',
        peach: 'var(--color-peach)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
