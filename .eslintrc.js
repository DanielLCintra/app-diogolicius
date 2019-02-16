module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb'
  ],
  rules: {
    semi: [
      2,
      'never'
    ],
    'max-len': 0,
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-nested-ternary': [
      'warn'
    ],
    'no-unused-expressions': [
      0
    ],
    'no-param-reassign': [
      'warn'
    ],
    'no-underscore-dangle': [
      'warn'
    ],
    'arrow-body-style': [
      'warn'
    ],
    'class-methods-use-this': 'warn',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never'
      }
    ]
  }
}
