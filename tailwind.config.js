module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        inherit: 'inherit'

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
