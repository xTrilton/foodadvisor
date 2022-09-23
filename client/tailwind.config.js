module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#e48a6f',
          darker: '#333333',
          text: '#FFFFFF',
          lightest: '#f0beaf',
        },
        secondary: {
          DEFAULT: '#41b3a3',
          light: '#85dcb',
          darker: '#3aa192',
          text: '#FFFFFF',
          lightest: '#ecf7f5',
        },
        muted: {
          DEFAULT: '#E5E7EB',
          light: '#F3F4F6',
          darker: '#D1D5DB',
          text: '#555b66',
        },
      },
    },
  },
  variants: {
    extend: {
      // ...
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [],
};
