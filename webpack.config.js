
var path = require('path');
var webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, 'tests/spec'),
                    path.resolve(__dirname, 'src'),
                ],
                loader: 'babel',
                query: {
                    presets: [
                        'es2015',
                        'stage-0',
                    ],
                    plugins: [
                        'babel-plugin-add-module-exports',
                        'transform-es2015-modules-commonjs',
                        'transform-object-assign',
                    ],
                },
            }
        ]
    },

    resolve: {
        root: __dirname,
        alias: {
            'zap-base-dom-selector': 'src/index.js',
        },
        modulesDirectories: [
            'src/js',
            'node_modules',
        ],
    },

    resolveLoader: {
        root: __dirname,
        modulesDirectories: [
            'src/js',
            'node_modules',
        ],
    },
};
