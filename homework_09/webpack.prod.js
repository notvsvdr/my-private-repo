const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const path = require('path');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {

    plugins: [
        new uglifyJsPlugin({
            sourceMap: true
        }),

        new optimizeCssAssetsPlugin(),

        new bundleAnalyzerPlugin()
    ]
});