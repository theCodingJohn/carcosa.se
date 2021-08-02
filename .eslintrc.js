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
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'no-console': 0,
    'indent': ['error', 2, { SwitchCase: 1, OBjectExpression: 1 }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'quote-props': ['error', 'consistent'],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'linebreak-style': 0,
  },
};
