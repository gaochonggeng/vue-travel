module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  plugins: ["vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-irregular-whitespace": "off",
    indent: ["error", 2, { SwitchCase: 1 }],
    semi: ["error", "always"],
    "generator-star-spacing": "off",
    quotes: [2, "single"],
    "space-before-function-paren":0
  }
};
