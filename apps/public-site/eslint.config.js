import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import tailwindcss from "eslint-plugin-tailwindcss";
import vueAccessibility from "eslint-plugin-vuejs-accessibility";

export default [
  // Specify file extensions to target
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },

  // Set global variables for the browser environment
  { languageOptions: { globals: globals.browser } },

  // JavaScript recommended config
  pluginJs.configs.recommended,

  // TypeScript recommended config
  ...tseslint.configs.recommended,

  // Vue 3 config
  ...pluginVue.configs["flat/essential"],

  // Vue.js accessibility plugin
  vueAccessibility.configs.recommended,

  // Add Prettier plugin for formatting
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error", // Ensure Prettier takes precedence over conflicting rules
    },
  },

  // Tailwind CSS plugin
  {
    plugins: {
      tailwindcss,
    },
    rules: {
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off", // Optionally enable this if you want to enforce strict Tailwind usage
    },
  },

  // Parsing for Vue files with TypeScript
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
      },
    },
  },

  // Add specific rules or overrides for TypeScript files if needed
  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // Customize this rule to avoid unused var errors
    },
  },
];
