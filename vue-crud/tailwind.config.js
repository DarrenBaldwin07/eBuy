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
        'primary4': '#E5E5E5',
        'primary5': '#FF7D7D'
        
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          margin: 'auto',
          paddingLeft: '5%',
          paddingRight: '5%',
          '@screen sm': {
            maxWidth: '750px',
          },
          '@screen md': {
            maxWidth: '900px',
          },
          '@screen lg': {
            maxWidth: '1200px',
          },
          '@screen xl': {
            maxWidth: '1500px',
          },
        }
      })
    },
  ],
};
