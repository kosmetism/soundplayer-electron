'use strict';

var webpack = require('webpack');
var path = require('path');
var config = require('c0nfig');

var config = {
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

    resolve: {
        extensions: ['', '.js', '.jsx', 'json'],
        packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },

    externals: ['web-frame'],

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?stage=0']
        }, {
            test: /\.css$/,
            loaders: ['style', 'css', 'cssnext']
        }]
    },

    target: 'atom'
};


module.exports = config;
