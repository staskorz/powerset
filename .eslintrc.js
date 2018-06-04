module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
    jest: true
  },

  extends: ["eslint:recommended", "plugin:prettier/recommended", "prettier"],

  plugins: ["prettier"]
};
