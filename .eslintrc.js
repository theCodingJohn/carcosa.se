module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'no-console': 0,
    'indent': ['error', 2, { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'] }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'quote-props': ['error', 'consistent'],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'linebreak-style': ['error', 'unix'],
    'react/prop-types': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: 'props' }],
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
