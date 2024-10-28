// prettier.config.cjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const prettierPluginTailwindcss = require('prettier-plugin-tailwindcss');

module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  plugins: [prettierPluginTailwindcss],
  printWidth: 80,
  tabWidth: 2,
};
