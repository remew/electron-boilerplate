const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './app/src/app.js',
    ],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: "/",
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
        }]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './app/src/static/index.ejs',
        //     title: 'ChatDeck',
        // }),
    ],
};

