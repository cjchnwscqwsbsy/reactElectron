const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/framework/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist/static'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './index.html'
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/framework/assets',
            to: __dirname + '/dist/assets'
        }])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }, {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                use: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }, {
                test: /\.html$/,
                use: 'html-withimg-loader'
            }
        ]
    },
}