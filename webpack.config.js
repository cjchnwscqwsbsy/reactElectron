const path = require('path');

module.exports = {
    entry: __dirname + "/src/framework/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            }
        ]
    }
}