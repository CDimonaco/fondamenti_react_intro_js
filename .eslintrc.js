// Installati eslint-plugin-react e eslint-plugin-html
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
  ],
  plugins: [
    'html',
  ],
  settings: {
    html: {
      'javascript-mime-types': ['text/javascript', 'text/babel'],
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
  },
};
