// eslint.config.js

import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import vueParser from 'vue-eslint-parser';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// Import CommonJS modules using require
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const vuePlugin = require('eslint-plugin-vue');

const config = [
  // Base JavaScript Configuration
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  // TypeScript Configuration
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.base.json',
        tsconfigRootDir: path.resolve(),
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },
  // Vue Configuration
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      ...vuePlugin.configs.recommended.rules,
    },
  },
  // Prettier Integration
  {
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
    },
  },
];

export default config;
