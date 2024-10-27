// apps/pwa-server/eslint.config.js

/**
 * @see https://eslint.org/docs/latest/use/configure/configuration-files-new
 * @type {import("eslint").Linter.Config}
 */

import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'eslint-define-config'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from './prettier.config.js'

// Simulate __dirname in an ES module environment
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig([
    {
        ignores: ['node_modules', 'dist', 'output', 'coverage'],
    },
    {
        files: ['**/*.{ts,js}'],
        ignores: ['**/*.d.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            'prettier/prettier': ['error', prettierConfig],
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
])
