// prettier.config.js

export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 80,
  tabWidth: 2,
  plugins: [import('prettier-plugin-tailwindcss')],
  ignoredFiles: [
    // Build outputs
    'dist/',
    '.output/',
    '.nuxt/',
    '.next/',
    'node_modules/',

    // Configuration and static files
    '*.config.js',
    '*.config.cjs',
    '*.config.mjs',
    '.*rc.js',
    '.*rc.cjs',
    '.*rc.mjs',
    '.prettierignore',
    '.gitignore',
    'public/',
    'extensions.json',

    // VSCode settings
    '.vscode/'
  ]
};
