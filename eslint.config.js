// eslint.config.js

import js from '@eslint/js';
import { createRequire } from 'module';
import tsParser from '@typescript-eslint/parser';
import path from 'path';
import { fileURLToPath } from 'url';
import vueParser from 'vue-eslint-parser';
import prettierConfig from 'eslint-config-prettier';

// Initialize require for CommonJS modules
const require = createRequire(import.meta.url);
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const vuePlugin = require('eslint-plugin-vue');

// Get the directory name of the current module (ESM equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  // Global ignore patterns for all build-related directories
  {
    ignores: [
      '**/dist/**',
      'node_modules/**',
      '**/.nuxt/**',
      '**/.output/**',
      '**/.next/**',
    ],
  },

  // Override Configurations for Specific Projects
  // Public Site Configuration
  {
    files: ['apps/public-site/**/*.{ts,tsx,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json',
        tsconfigRootDir: path.join(__dirname, 'apps/public-site'),
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      vue: vuePlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...vuePlugin.configs.recommended.rules,
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
        project: 'tsconfig.json',
        tsconfigRootDir: path.join(__dirname, 'apps/pwa-server'),
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
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
        project: 'tsconfig.json',
        tsconfigRootDir: path.join(__dirname, 'apps/pwa-client'),
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      vue: vuePlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...vuePlugin.configs.recommended.rules,
    },
  },

  // Base JavaScript Configuration
  {
    files: ['**/*.{js,jsx}'],
    excludedFiles: ['apps/**'],
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

  // TypeScript Configuration for Root Files
  {
    files: ['*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },

  // Vue Configuration for Root Vue Files
  {
    files: ['*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      ...vuePlugin.configs.recommended.rules,
    },
  },

  // Custom ESLint Rules for All Relevant Files
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
