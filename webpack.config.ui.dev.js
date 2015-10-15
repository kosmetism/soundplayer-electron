'use strict';

var webpack = require('webpack');
var path = require('path');
var assign = require('object-assign');
var config = require('c0nfig');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
var baseConfig = require('./webpack.config.base');

var hotReloadUrl = config.hotReloadUrl;
var hotReloadPort = config.hotReloadPort;

var config = assign(baseConfig, {
    hotReloadPort: hotReloadPort,

    devtool: 'cheap-module-eval-source-map',

    entry: [
        'webpack-dev-server/client?' + hotReloadUrl,
        'webpack/hot/only-dev-server',
        './src/ui/app'
    ],

    output: {
        path: path.join(__dirname, 'public', 'build'),
        filename: 'bundle.js',
        publicPath: hotReloadUrl,
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

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
