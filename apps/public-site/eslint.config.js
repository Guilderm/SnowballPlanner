import globals from 'globals'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier'
import tailwindcssPlugin from 'eslint-plugin-tailwindcss'
import vueAccessibilityPlugin from 'eslint-plugin-vuejs-accessibility'
import vueParser from 'vue-eslint-parser'

const vueConfig = pluginVue.configs['flat/recommended']

const recommendedConfigs = [
  typescriptEslintPlugin.configs.recommended,
  vueAccessibilityPlugin.configs.recommended,
  tailwindcssPlugin.configs.recommended,
  pluginPrettier.configs.recommended,
]

export default [
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.nuxt/**',
      'nuxt.config.ts',
      'eslint.config.js',
      'tailwind.config.js',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
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
      ...vueConfig.rules,
      ...recommendedConfigs.reduce((acc, config) => {
        return { ...acc, ...config.rules }
      }, {}),
      'prettier/prettier': 'error',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
]
