/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f2ea',
        foreground: '#111111',
        muted: '#6b665c',
        line: '#d9d2c5',
        panel: '#fbf8f2',
        accent: '#1f3b2f',
        accentSoft: '#dce5dd',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        card: '0 10px 30px rgba(17, 17, 17, 0.06)',
      },
      borderRadius: {
        xl2: '1.5rem',
      },
      letterSpacing: {
        snugger: '-0.04em',
      },
    },
  },
  plugins: [],
}
