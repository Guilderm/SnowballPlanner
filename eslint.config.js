// eslint.config.js

import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname equivalent for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  // JavaScript configurations
  js.configs.recommended,

  // TypeScript configurations
  typescriptEslint.configs.recommended,

  // Vue configurations
  vue.configs.recommended,

  // Prettier configurations
  prettier.configs.prettier,

  // Custom configuration
  {
    files: ["**/*.{js,ts,vue}"],
    // Replace .eslintignore with ignores property here
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
      prettier,
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
