'use strict';

var path = require('path');
var assign = require('object-assign');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var baseConfig = require('./webpack.config.base');

var config = assign(baseConfig, {
    entry: './src/ui/app',

    output: {
        path: path.join(__dirname, 'public', 'build'),
        filename: 'bundle.min.js',
        publicPath: './',
        libraryTarget: 'commonjs2'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new ExtractTextPlugin('app.min.css')
    ],

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                stage: 0
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader')
        }],
        postLoaders: [{
            loader: 'transform?envify'
        }]
    }
});

module.exports = config;
