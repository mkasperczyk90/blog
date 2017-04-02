const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./base.config.js');

module.exports = function() {
    return webpackMerge(commonConfig(), {
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
        ]
    })
}