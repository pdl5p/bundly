var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'myApp.js',
        library: 'myApp',
        libraryTarget: 'var'
    },
    watch: true,
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
        new webpack.optimize.UglifyJsPlugin()
    ]
}