module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['next', 'prettier'],
  plugins: ['unicorn'],
  rules: {
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all'
      }
    ],
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase'
      } 
    ]
  }
};