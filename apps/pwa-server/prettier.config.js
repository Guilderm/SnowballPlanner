// apps/pwa-server/prettier.config.js

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    // Add any additional Prettier options here
    // For example, to set end of line:
    endOfLine: 'lf',
    // To enforce parser options for specific files, use overrides
    overrides: [
        {
            files: '*.ts',
            options: {
                parser: 'typescript',
            },
        },
        {
            files: '*.js',
            options: {
                parser: 'babel',
            },
        },
        // Add more overrides as needed
    ],
}

module.exports = config
