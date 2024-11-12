// eslint.config.js

import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import path from 'path';

// Define __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize FlatCompat with the base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Extend ESLint's recommended rules
  compat.extends('eslint:recommended'),

  // Extend TypeScript recommended rules
  compat.extends('plugin:@typescript-eslint/recommended'),

  // Extend Vue.js recommended rules
  compat.extends('plugin:vue/recommended'),

  // Extend Prettier to disable conflicting ESLint rules
  compat.extends('prettier'),

  // Optional: Add Prettier plugin to integrate Prettier formatting as ESLint rules
  compat.extends('plugin:prettier/recommended'),

  // Specify parser options globally if needed
  {
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: path.resolve(__dirname, './tsconfig.base.json'), // Adjust path if necessary
        tsconfigRootDir: __dirname,
      },
    },
  },

  // Add any custom rules or overrides here
  {
    rules: {
      // Example: Override a specific rule
      'no-console': 'warn',
      // Add more custom rules as needed
    },
  },
];
