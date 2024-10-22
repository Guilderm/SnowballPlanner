import globals from 'globals'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier'
import tailwindcssPlugin from 'eslint-plugin-tailwindcss'
import vueAccessibilityPlugin from 'eslint-plugin-vuejs-accessibility'

// Import recommended configurations from plugins
const recommendedConfigs = [
  typescriptEslintPlugin.configs.recommended,
  pluginVue.configs['vue3-recommended'],
  vueAccessibilityPlugin.configs.recommended,
  tailwindcssPlugin.configs.recommended,
  pluginPrettier.configs.recommended,
]

export default [
  {
    // Ignore built files, node_modules, and ESLint/Nuxt config files
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.nuxt/**',
      'eslint.config.js',
      'nuxt.config.ts',
    ],
  },
  {
    // Base configuration for linting source files
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.eslint.json', // Use the separate TSConfig for ESLint
        extraFileExtensions: ['.vue'], // Support for Vue 3 single-file components (SFC)
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      vue: pluginVue,
      'vuejs-accessibility': vueAccessibilityPlugin,
      tailwindcss: tailwindcssPlugin,
      prettier: pluginPrettier,
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
]
