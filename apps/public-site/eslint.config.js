import globals from 'globals'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import prettierPlugin from 'eslint-plugin-prettier'
import tailwindcssPlugin from 'eslint-plugin-tailwindcss'
import vueAccessibilityPlugin from 'eslint-plugin-vuejs-accessibility'

// Import recommended configurations from plugins
const recommendedConfigs = [
  typescriptEslintPlugin.configs.recommended,
  vuePlugin.configs['vue3-recommended'],
  vueAccessibilityPlugin.configs.recommended,
  tailwindcssPlugin.configs.recommended,
  prettierPlugin.configs.recommended,
]

export default [
  {
    // Ignore built files, node_modules, and configuration files
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.nuxt/**',
      'nuxt.config.ts',
      'eslint.config.js',
    ],
  },
  {
    // Configuration for Vue files
    files: ['**/*.vue'],
    languageOptions: {
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: tsParser, // Use TypeScript parser for the script block
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json', // Reference the main tsconfig.json
        extraFileExtensions: ['.vue'], // Support for Vue 3 single-file components (SFC)
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      vue: vuePlugin,
      'vuejs-accessibility': vueAccessibilityPlugin,
      prettier: prettierPlugin,
      tailwindcss: tailwindcssPlugin,
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      // Merge recommended rules from all plugins
      ...recommendedConfigs.reduce((acc, config) => {
        return { ...acc, ...config.rules }
      }, {}),
      // Custom rules
      'prettier/prettier': 'error',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }, // Ignore unused variables starting with _
      ],
    },
  },
  {
    // Configuration for JavaScript and TypeScript files
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json', // Reference the main tsconfig.json
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin,
      tailwindcss: tailwindcssPlugin,
      'vuejs-accessibility': vueAccessibilityPlugin,
    },
    rules: {
      // Merge recommended rules from all plugins
      ...recommendedConfigs.reduce((acc, config) => {
        return { ...acc, ...config.rules }
      }, {}),
      // Custom rules
      'prettier/prettier': 'error',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
]
