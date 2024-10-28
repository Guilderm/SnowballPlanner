// prettier.config.js

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const prettierPluginTailwindcss = require('prettier-plugin-tailwindcss');

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  plugins: [prettierPluginTailwindcss],
  printWidth: 80,
  tabWidth: 2,
};
