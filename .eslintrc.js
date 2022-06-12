module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'prettier/prettier': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    'import/extensions': ['error', 'never'],
    'react/prop-types': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    camelcase: [
      'error',
      { properties: 'never', ignoreImports: true, ignoreDestructuring: true },
    ],
  },
}
