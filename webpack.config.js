var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
var webpack = require('webpack');
var path = require('path');
//var wprx = require('webpack-rxjs-externals');
var _ = require('lodash');


let externals = {
    'moment': 'moment',
    'react': 'React',
    'react-dom': 'ReactDOM',
    '@reactivex/rxjs': 'Rx'
}
//_.merge(externals, wprx());

console.log(externals);

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
    externals,
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel",
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loaders:['babel', 'awesome-typescript']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/index.html'
        }),
        //new webpack.optimize.UglifyJsPlugin()
        new CheckerPlugin()
    ],
    devtool: 'inline-source-map',
    //devtool: 'eval',
    devServer: {
        inline: true,
        port: 3000,
        hot: false
    }
}