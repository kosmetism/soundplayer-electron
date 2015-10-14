'use strict';

var webpack = require('webpack');
var path = require('path');

var config = {
    entry: './src/main/index',

    output: {
        path: path.join(__dirname, '.'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },

    plugins: [],

    resolve: {
        extensions: ['', '.js', '.jsx', 'json'],
        packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },

    externals: ['web-frame'],

    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ['babel?stage=0']
        }]
    },

    target: 'atom'
};

module.exports = config;
