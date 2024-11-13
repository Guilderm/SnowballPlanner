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
      '**/.next/**', // Added to cover any Next.js directories if present
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

  // TypeScript Configuration for Shared and Root Files (if any)
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: path.join(__dirname, 'tsconfig.base.json'), // Adjust if you have shared TypeScript files
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

  // Vue Configuration for All Vue Files
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        project: path.join(__dirname, 'tsconfig.base.json'), // Adjust if necessary
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
      // Inherit base rules
      ...tsPlugin.configs.recommended.rules,
      ...vuePlugin.configs.recommended.rules,
      // Add or override rules specific to public-site if necessary
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
      ...tsPlugin.configs.recommended.rules,
      // Add or override rules specific to pwa-server if necessary
    },
  },

  // Add additional project-specific overrides here
  // Example: PWA Client Configuration
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
      ...tsPlugin.configs.recommended.rules,
      ...vuePlugin.configs.recommended.rules,
      // Add or override rules specific to pwa-client if necessary
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
