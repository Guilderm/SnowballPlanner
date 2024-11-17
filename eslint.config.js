// eslint.config.js

import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import path from 'path';
import { fileURLToPath } from 'url';
import vueParser from 'vue-eslint-parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vuePlugin from 'eslint-plugin-vue';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  // Ignore build directories
  {
    ignores: [
      '**/dist/**',
      'node_modules/**',
      '**/.nuxt/**',
      '**/.output/**',
      '**/.next/**',
    ],
  },

  // Public Site Configuration
  {
    files: ['apps/public-site/**/*.{ts,tsx,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: path.join(__dirname, 'apps/public-site/tsconfig.json'),
        tsconfigRootDir: path.join(__dirname, 'apps/public-site'),
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      vue: vuePlugin,
    },
    rules: {
      ...tsPlugin.configs['recommended'].rules,
      ...vuePlugin.configs['recommended'].rules,
      // Disable conflicting rules
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': ['error'],
    },
  },

  // PWA Server Configuration
  {
    files: ['apps/pwa-server/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: path.join(__dirname, 'apps/pwa-server/tsconfig.json'),
        tsconfigRootDir: path.join(__dirname, 'apps/pwa-server'),
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs['recommended'].rules,
      // Disable conflicting rules
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': ['error'],
    },
  },

  // PWA Client Configuration
  {
    files: ['apps/pwa-client/**/*.{ts,tsx,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: path.join(__dirname, 'apps/pwa-client/tsconfig.json'),
        tsconfigRootDir: path.join(__dirname, 'apps/pwa-client'),
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      vue: vuePlugin,
    },
    rules: {
      ...tsPlugin.configs['recommended'].rules,
      ...vuePlugin.configs['recommended'].rules,
      // Disable conflicting rules
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': ['error'],
    },
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
      ...js.configs['recommended'].rules,
    },
  },

  // Prettier Configuration
  {
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    plugins: {
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
