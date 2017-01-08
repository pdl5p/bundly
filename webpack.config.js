var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundly.js',
        library: 'BUNDLY',
        libraryTarget: 'var'
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        loaders: [
            { 
                test: /\.jsx?$/, 
                loader: "babel",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/index.html'
        }),
        //new webpack.optimize.UglifyJsPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        port: 3000,
        hot: false
    }
}