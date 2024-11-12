// eslint.config.js

import js from '@eslint/js';
import { createRequire } from 'module';
import tsParser from '@typescript-eslint/parser';
import path from 'path';
import vueParser from 'vue-eslint-parser';
import prettierConfig from 'eslint-config-prettier';

const require = createRequire(import.meta.url);
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const vuePlugin = require('eslint-plugin-vue');

export default [
  // Global ignore patterns for all build-related directories
  {
    ignores: [
      '**/dist/**',
      'node_modules/**',
      '**/.nuxt/**',
      '**/.output/**'
    ],
  },

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
        project: './tsconfig.json',
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

  // Custom ESLint Rules
  {
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    rules: {
      // Add any project-specific custom rules here
    },
  },

  // Integrate Prettier Configurations
  {
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    rules: {
      ...prettierConfig.rules,
    },
  },
];
