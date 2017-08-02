const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    entry: [
        'babel-polyfill',
        path.join(__dirname, '../web/styles/index.scss'),
        path.join(__dirname, '../web/index.js')
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devtool: 'eval',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: ['url-loader']
            },
            {
                test: /\.json$/,
                loaders: ['json-loader']
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../assets/index.html'),
            filename: path.join(__dirname, '../dist/index.html')
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, '../dist')
    }
};
