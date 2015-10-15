'use strict';

module.exports = {
    node: {
        __dirname: true
    },

    resolve: {
        extensions: ['', '.js', '.jsx', 'json'],
        packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },

    externals: ['web-frame']
};
