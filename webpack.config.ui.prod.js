'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
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

    resolve: {
        extensions: ['', '.js', '.jsx', 'json'],
        packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },

    externals: ['web-frame'],

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
    },

    target: 'atom'
};

module.exports = config;
