const webpack = require('webpack');
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

    entry: './src/app.js',

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }
            },

            {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/app.html',
            filename: 'index.html'
        }),
        new extractTextPlugin('style.css'),
        new cleanWebpackPlugin(['bin']),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],

    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, './bin')
    }
}