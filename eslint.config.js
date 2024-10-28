// eslint.config.js

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname equivalent for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  js.configs.recommended,
  typescriptEslint.configs.recommended,
  vue.configs.recommended,
  compat.extends("prettier"), // Correctly extend 'eslint-config-prettier'
  {
    files: ["**/*.{js,ts,vue}"],
    ignores: [
      "dist/",
      ".output/",
      ".nuxt/",
      ".next/",
      "node_modules/",
      "public/",
    ],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
        extraFileExtensions: [".vue"],
      },
    },
    plugins: {
      vue,
      "@typescript-eslint": typescriptEslint,
      prettier: prettierPlugin, // Assign 'prettier' plugin
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      // Add any additional custom rules here
    },
  },
];
