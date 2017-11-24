const merge = require('webpack-merge');
const webpack = require("webpack");
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
        historyApiFallback:true,
        inline: true,
        hot:true,
        port: 9000,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                use: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }
        ]
    },
});