module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {

      },
      gradientColorStops: theme => ({
        ...theme("colors"),
        navigationGray: "rgba(229,232,241,1)",
        navigationPurple: "rgba(243,226,249,1)"
      }),
      textColor: theme => theme("colors"),
      textColor: {
        navGray: "#8E92AD",
        blue: "#3E9AED"
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
