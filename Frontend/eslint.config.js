// Frontend\eslint.config.js

import pluginVue from 'eslint-plugin-vue';

export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // or the latest ECMAScript version you use
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // If you're using JSX
    },
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    ...pluginVue.configs['flat/recommended'],
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-unused-vars': 'error',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/no-mutating-props': 'error',
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-debugger': 'error',
    eqeqeq: ['error', 'always'],
    // Example TypeScript rule overrides:
    // '@typescript-eslint/no-unused-vars': ['error'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // TypeScript-specific rules can be defined here
      },
    },
  ],
};
