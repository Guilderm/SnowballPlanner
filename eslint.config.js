// eslint.config.js

import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import vuePlugin from 'eslint-plugin-vue';
import prettierPlugin from 'eslint-plugin-prettier';
import { fileURLToPath } from 'url';
import path from 'path';

// Define __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  // Base JavaScript Config
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // TypeScript Config for `.ts` and `.tsx` files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: path.resolve(__dirname, './tsconfig.base.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      // Add or override TypeScript-specific rules here
    },
  },

  // Vue Config for `.vue` files
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vuePlugin.parsers.vue,
      parserOptions: {
        parser: typescriptParser,
        project: path.resolve(__dirname, './tsconfig.base.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...vuePlugin.configs.recommended.rules,
      ...typescriptPlugin.configs.recommended.rules,
      // Add or override Vue-specific rules here
    },
  },

  // Prettier Config to avoid conflicts with Prettier
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // Global Overrides and Custom Rules
  {
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    rules: {
      'no-console': 'warn',
      // Add more custom rules as needed
    },
  },
];
