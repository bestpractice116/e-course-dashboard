module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        inherit: 'inherit'
      },
      transitionProperty: {
        'colors': 'background-color, color',
      },
      borderWidth: {
        donut: "24px"
      },
      margin: {
        '18': '4.5rem',
        '19': '4.75rem',
      },
      minHeight: {
        '10': '350px',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'inputGray': '#F8F9FD',
        'summarybg': '#F5F6FA',
      }),
      backgroundImage: theme => ({
        'sign': "url('/assets/illustrations/sign.jpg')",
      }),
      spacing: {
        '88': '22rem',
        '108': '27rem',
        '120': '30rem',
        '132': '33rem',
        '144': '36rem',
        '150': '37.75',
        '156': '39rem',
        '168': '42rem',
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'appsmall': 'auto 1fr',
        'appbig': 'auto 1fr 480px',

      },
      gradientColorStops: theme => ({
        ...theme("colors"),
        navigationGray: "#ebedf4",
        navigationPurple: "#faf2fc"
      }),
      textColor: theme => theme("colors"),
      textColor: {
        navGray: "#8E92AD",
        logoblue: "#3E9AED",
        textBlue: "#10214C",
        linkBlue: "#429EF1",
      },
      animation: {
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          }
        }
      },
      boxShadow: {
        inputNormal: '0 0 0 4px #b7d7f9',
        inputNormalDark: '0 0 0 4px #0c5299',
        inputValid: '0 0 0 3px #20D300',
        inputInvalid: '0 0 0 3px #CE2400',
      }
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ],
    },
  }
}
