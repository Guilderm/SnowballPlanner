// prettier.config.js

import prettierPluginTailwindcss from 'prettier-plugin-tailwindcss';

/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 80,
  tabWidth: 2,
  plugins: [prettierPluginTailwindcss],
};
