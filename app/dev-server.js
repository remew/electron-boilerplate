const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');

config.entry.unshift('webpack-dev-server/client?http://localhost:8008/');

const options = {
    contentBase: 'app/src/static',
    publicPath: "/",
    filename: 'app.bundle.js',
};

const server = new WebpackDevServer(webpack(config), options);

module.exports = server;

