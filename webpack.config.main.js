'use strict';

var webpack = require('webpack');
var path = require('path');
var assign = require('object-assign');
var baseConfig = require('./webpack.config.base');

var config = assign(baseConfig, {
    entry: './src/main/app',

    output: {
        path: path.join(__dirname, '.'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ],

    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ['babel?stage=0']
        }]
    },

    target: 'atom'
});

module.exports = config;
