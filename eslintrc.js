module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/prettier",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    "import/prefer-default-export": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
};
