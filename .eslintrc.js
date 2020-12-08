module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ["es-beautifier"],
  extends: ["plugin:vue/essential", "plugin:es-beautifier/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    //"comma-dangle": ["error", "never"],
    "linebreak-style": "off",
    "eol-last": ["error", "never"],
    "comma-dangle": ["error", {
      "objects": "ignore",
    }],
    "template-curly-spacing": "off",
    "indent": ["error", 2, {
      "ignoredNodes": ["TemplateLiteral"]
    }]
  }
};
