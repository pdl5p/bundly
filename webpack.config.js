
var nm = __dirname + '/node_modules';

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
            { test: /\.js/, loader: "babel"}
        ]
    }
}