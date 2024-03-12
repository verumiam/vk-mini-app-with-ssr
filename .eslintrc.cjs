module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    next: {
      rootDir: './src/app/',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'next',
    'next/core-web-vitals',
  ],
  ignorePatterns: ['dist', '.next', 'build', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
