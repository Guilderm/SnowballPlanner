// eslint.config.ts

import type { Linter } from 'eslint';
import js from '@eslint/js';
import * as tsConfigs from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import * as vueConfigs from 'eslint-plugin-vue';
import prettierPlugin from 'eslint-plugin-prettier';
import vueParser from 'vue-eslint-parser';
import path from 'path';

const __dirname = path.resolve();

const config: Linter.FlatConfig[] = [
  // Base JavaScript Configuration
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // TypeScript Configuration
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.base.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsConfigs,
    },
    rules: {
      ...tsConfigs.configs.recommended.rules,
      // Additional TypeScript rules can be added here
    },
  },

  // Vue Configuration
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          ts: '@typescript-eslint/parser',
          js: 'espree',
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.base.json',
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue: vueConfigs,
    },
    rules: {
      ...vueConfigs.configs.recommended.rules,
      // Additional Vue-specific rules can be added here
    },
  },

  // Prettier Configuration
  {
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      // Additional custom rules can be added here
    },
  },
];

export default config;
