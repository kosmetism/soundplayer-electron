var host = require('network-address')();

module.exports = {
    env: process.env.NODE_ENV || 'development',
    host: host,
    hotReloadPort: process.env.HOT_RELOAD_PORT || 3993,
    hotReloadUrl: 'http://$(host):$(hotReloadPort)/',
    soundcloud: {
        clientId: '08f79801a998c381762ec5b15e4914d5'
    }
};
