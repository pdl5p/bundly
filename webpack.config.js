var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: './dist2',
        filename: 'myApp.js',
        library: 'PEPPA',
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
    devtool: 'inline-source-map'
}