// eslint.config.js

import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import { createRequire } from 'module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const require = createRequire(import.meta.url);
const typescriptParser = require('@typescript-eslint/parser');
const vueEslintParser = require('vue-eslint-parser');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
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

  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      globals: {},
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueEslintParser,
      ecmaVersion: 'latest',
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
  ...compat.extends('prettier'),
  {
    files: [
      'Backend/**/*.js',
      'apps/pwa-server/**/*.js',
      'apps/public-site/tailwind.config.js',
      'prettier.config.js',
    ],
    languageOptions: {
      ecmaVersion: 2021, 
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
