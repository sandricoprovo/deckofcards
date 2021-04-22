// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: { url: '/', static: false },
        src: { url: '/src' },
    },
    plugins: [
        [
            '@snowpack/plugin-react-refresh',
            '@snowpack/plugin-typescript',
            [
                '@snowpack/plugin-babel',
                {
                    // (optional) specify files for Babel to transform
                    input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
                    // babel transform options
                    transformOptions: {},
                },
            ],
            '@snowpack/plugin-webpack',
        ],
    ],
    packageOptions: {
        /* ... */
    },
    devOptions: {
        open: 'chrome',
    },
    buildOptions: {
        sourcemap: true,
    },
    optimize: {
        bundle: true,
        minify: true,
        target: 'es2015',
    },
    exclude: ['**/node_modules/**/*'],
};
