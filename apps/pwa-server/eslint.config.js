// apps/pwa-server/eslint.config.js

/**
 * @see https://eslint.org/docs/latest/use/configure/configuration-files-new
 * @type {import("eslint").Linter.Config}
 */

import { defineConfig } from 'eslint-define-config'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from './.prettier.config.js' // Updated to reflect the new filename

export default defineConfig([
    {
        // Specify the files and directories to ignore
        ignores: [
            'node_modules',
            'dist',
            'output',
            'coverage',
            'apps/pwa-server/node_modules',
            'apps/pwa-server/dist',
            'apps/pwa-server/output',
        ],
    },
    {
        // Apply these settings to TypeScript and JavaScript files
        files: ['**/*.{ts,js}'],
        ignores: ['**/*.d.ts'], // Optional: ignore declaration files
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
        // Extend recommended rules
        rules: {
            ...tsPlugin.configs.recommended.rules,
            // Prettier integration
            'prettier/prettier': ['error', prettierConfig],
            // Custom rules
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
])
