module.exports = {
  mode: 'jit',
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        'primary1': '#FF7676',
        'primary2': '#454545',
        'primary3': '#EA5858',
        'primary4': '#E5E5E5'
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
