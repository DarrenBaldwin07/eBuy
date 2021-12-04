module.exports = {
  mode: 'jit',
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // media queries 
    screens: {
      'lg': {'min': '1024px'},
      '2xl': {'min': '1535px'},
      'xl': {'min': '1279px'},
      'lg': {'min': '1023px'},
      'md': {'min': '767px'},
      'sm': {'min': '639px'},
      'slg': {'max': '1024px'},
      's2xl': {'max': '1535px'},
      'sxl': {'max': '1279px'},
      'slg': {'max': '1023px'},
      'smd': {'max': '767px'},
      'ssm': {'max': '639px'},
    },
    
    // custom colors
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
    // for container
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
