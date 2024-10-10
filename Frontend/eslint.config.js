import pluginVue from 'eslint-plugin-vue';

export default [
  {
    extends: [
      // ESLint's built-in recommended JavaScript rules:
      'eslint:recommended',

      // Vue 3 recommended rules:
      ...pluginVue.configs['flat/recommended'],

      // Prettier as an ESLint plugin:
      'plugin:prettier/recommended',
    ],
    rules: {
      // Custom rules or overrides:
      'vue/no-unused-vars': 'error',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/no-mutating-props': 'error',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-debugger': 'error', // Disallow debugger statements
      eqeqeq: ['error', 'always'], // Enforce strict equality
    },
  },
];
