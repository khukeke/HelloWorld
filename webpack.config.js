const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'output')
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@configs': path.join(__dirname, '../src/configs'),
            '@middleware': path.join(__dirname, '../src/middleware'),
        }
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    devServer: {
        contentBase: './',
        compress: true,
        port: 9001,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jpg|gif|svg|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'ohhhh',
            template: './public/template.ejs',
            inject: 'body'
        }),
        // new ExtractTextPlugin("./src/style/style.css")
    ]
}