const path = require("path");
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, './dist'),
        compress: false,
        writeToDisk: true
    },
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, './src/index.html'),
                to: path.resolve(__dirname, './dist/index.html'),
                toType: 'file'
            }]
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};