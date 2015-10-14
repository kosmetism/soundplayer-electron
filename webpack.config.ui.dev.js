'use strict';

var webpack = require('webpack');
var path = require('path');
var assign = require('object-assign');
var config = require('c0nfig');
var baseConfig = require('./webpack.config.base');

var config = assign(baseConfig, {
    hotReloadPort: config.hotReloadPort,

    devtool: 'cheap-module-eval-source-map',

    entry: [
        'webpack-dev-server/client?' + config.hotReloadUrl,
        'webpack/hot/only-dev-server',
        './src/ui/app'
    ],

    output: {
        path: path.join(__dirname, 'public', 'build'),
        filename: 'bundle.js',
        publicPath: config.hotReloadUrl,
        libraryTarget: 'commonjs2'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?stage=0']
        }, {
            test: /\.css$/,
            loaders: ['style', 'css', 'cssnext']
        }]
    }
});

module.exports = config;
