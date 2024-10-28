// eslint.config.js

import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import { createRequire } from 'module';

// Define __dirname equivalent for ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const require = createRequire(import.meta.url);
const typescriptParser = require('@typescript-eslint/parser');
const vueEslintParser = require('vue-eslint-parser');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// List all tsconfig.json paths relative to the root and convert to absolute paths
const tsConfigPaths = [
  path.resolve(__dirname, './tsconfig.json'), // Root tsconfig
  path.resolve(__dirname, './apps/public-site/tsconfig.json'),
  path.resolve(__dirname, './apps/pwa-server/tsconfig.json'),
  // Add more tsconfig.json paths here if you have additional projects
];

export default [
  // 1. Ignored Directories (Place at the top)
  {
    ignores: [
      '**/dist/**',
      '**/.output/**',
      '**/.nuxt/**',
      '**/.next/**',
      '**/node_modules/**',
      '**/public/**',
    ],
  },

  // 2. ESLint's Recommended Configuration
  js.configs.recommended,

  // 3. Vue's Flat Recommended Configuration
  ...pluginVue.configs['flat/recommended'],

  // 4. TypeScript Configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest', // Correctly set as 'latest'
      sourceType: 'module',
      parserOptions: {
        project: tsConfigPaths, // Updated to include all tsconfig.json paths as absolute paths
      },
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },

  // 5. Vue Configuration with Parser Options
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueEslintParser,
      ecmaVersion: 'latest', // Correctly set as 'latest'
      sourceType: 'module',
      parserOptions: {
        parser: typescriptParser,
      },
      globals: {
        definePageMeta: 'readonly',
        defineNuxtConfig: 'readonly',
        defineNuxtPlugin: 'readonly',
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },

  // 6. Prettier Integration with eslint-config-prettier
  ...compat.extends('prettier'),

  // 7. Node Environment for Server-Side Scripts and Config Files
  {
    files: [
      'Backend/**/*.js',
      'apps/pwa-server/**/*.js',
      'apps/public-site/tailwind.config.js',
      'prettier.config.js',
    ],
    languageOptions: {
      ecmaVersion: 2021, // Correct data type: number
      sourceType: 'module',
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },
];
