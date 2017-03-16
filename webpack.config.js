var webpack = require("webpack");
const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'mathbird.bundle.js'
    },
    module: {
        loaders: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }, {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    plugins: [new BabiliPlugin()]
};
