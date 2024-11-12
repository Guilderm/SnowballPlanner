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
  // **1. Base Config: Recommended JS Rules**
  js.configs.recommended,

  // **2. Base Config: Recommended Vue Rules**
  pluginVue.configs['flat']?.recommended || pluginVue.configs['recommended'],

  // **3. Prettier Integration**
  ...compat.extends('prettier'),

  // **4. Configuration for `public-site` Vue files**
  {
    files: ['apps/public-site/**/*.vue'],
    languageOptions: {
      parser: vueEslintParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: typescriptParser,
        project: path.resolve(__dirname, './apps/public-site/tsconfig.json'),
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.vue'],
      },
      globals: {
        definePageMeta: 'readonly',
        defineNuxtConfig: 'readonly',
        defineNuxtPlugin: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: {
      'vue': pluginVue,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      ...pluginVue.configs['flat']?.recommended.rules || pluginVue.configs['recommended'].rules,
      ...typescriptPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },

  // **5. Configuration for `public-site` TypeScript files**
  {
    files: ['apps/public-site/**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: path.resolve(__dirname, './apps/public-site/tsconfig.json'),
        tsconfigRootDir: __dirname,
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

  // **6. Configuration for `pwa-server` TypeScript files**
  {
    files: ['apps/pwa-server/**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: path.resolve(__dirname, './apps/pwa-server/tsconfig.json'),
        tsconfigRootDir: __dirname,
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

  // **7. Configuration for `pwa-client` TypeScript files**
  {
    files: ['apps/pwa-client/**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: path.resolve(__dirname, './apps/pwa-client/tsconfig.json'),
        tsconfigRootDir: __dirname,
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

  // **8. Configuration for Test Files**
  {
    files: ['**/*.spec.ts', '**/*.test.ts', '**/*.e2e-spec.ts'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: [
          path.resolve(__dirname, './apps/public-site/tsconfig.json'),
          path.resolve(__dirname, './apps/pwa-client/tsconfig.json'),
          path.resolve(__dirname, './apps/pwa-server/tsconfig.json'),
        ],
        tsconfigRootDir: __dirname,
      },
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {},
  },

  // **9. Configuration for Specific JS Files**
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
