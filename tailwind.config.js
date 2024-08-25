module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary-light': '#b07dff',
        'primary-dark': '#8a4cd9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes:
        [
          {
            'light': {
              'primary': '#a15cfa',
              'primary-light': '#b07dff',
              'primary-dark': '#8a4cd9',
              'secondary': '#3d4461',
              'base-100': '#f7fafc',
              'base-200': '#edf2f7',
              'base-300': '#e2e8f0',
              'base-content': '#838a95',
            },
            'dark': {
              'primary': '#a15cfa',
              'primary-light': '#b07dff',
              'primary-dark': '#8a4cd9',
              'secondary': '#e6e5e5',
              'base-100': '#1a202c',
              'base-200': '#2d3748',
              'base-300': '#4a5568',
              'base-content': '#718096',
            },
          }
        ]
  },
}