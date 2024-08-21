module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@next/next/recommended',
    '@payloadcms',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['**/payload-types.ts'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', // Ignore unused variables
    'simple-import-sort/imports': 'off', // Disable import sorting
    '@typescript-eslint/ban-ts-comment': 'off', // Ignore @ts-nocheck and similar comments
    '@typescript-eslint/no-explicit-any': 'off', // Allow use of `any` type
    '@typescript-eslint/no-empty-function': 'off', // Allow empty functions
    '@typescript-eslint/no-inferrable-types': 'off', // Allow explicit type annotations
    'prettier/prettier': ['off', { endOfLine: 'auto' }],
    '@typescript-eslint/no-implicit-any-catch': 'off',
  },
}
