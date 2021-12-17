module.exports = {
  mode: 'jit',
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {

    minWidth: {
      '800': '800px',
      '500': '500px',
      '300': '300px',
    },

    // media queries 
    screens: {
      '2xl': {'min': '1535px'},
      'xl': {'min': '1279px'},
      'lg': {'min': '1023px'},
      'md': {'min': '767px'},
      'sm': {'min': '639px'},
      'sx': {'min': '500px'},
      's2xl': {'max': '1535px'},
      'sxl': {'max': '1279px'},
      'sl': {'max': '1120px'},
      'slg': {'max': '1023px'},
      'sdd': {'max': '850px'},
      'smd': {'max': '767px'},
      'ssm': {'max': '639px'},
      'xs': {'max': '550px'},
      'xxs': {'max': '480px'},
      'xxxs': {'max': '300px'},
    },
    
    // custom colors - put in extend to extend current props instead of overriding everything
    extend: {
      
      margin: {
        '192': '768px'
      },

      width: {
        '800': '800px',
        '650': '650px',
        '500': '500px',
        '400': '400px',
        '300': '300px',
      },

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
