var gulp = require('gulp');
var Gwebpack = require('gulp-webpack');

var del = require('del');
var WebpackDevServer = require('webpack-dev-server');
var gutil = require('gulp-util');
var path = require('path');

var webpackOptions = require('./webpack.config');
var webpack = require('webpack');

gulp.task('default', ['clean'], () => {

    webpackOptions.output.path = null;

    return gulp.src('./src/index.js')
                .pipe(Gwebpack(webpackOptions))
                .pipe(gulp.dest('./dist'));

});

gulp.task('clean', () => {
    return del("./dist*");
});

//Cant get this to work as is
// gulp.task("webpack-dev-server", function(callback) {
// 	// modify some webpack config options
// 	// var myConfig = Object.create(webpackOptions);
// 	// myConfig.devtool = "eval";
// 	// myConfig.debug = true;

// 	// Start a webpack-dev-server
// 	new WebpackDevServer(webpack(webpackOptions), {
// 		//publicPath: "/" + myConfig.output.publicPath,
//         //publicPath: "/dist",
//         contentBase: "./dist",
//         publicPath: '',
//         inline: true,
// 		stats: {
// 			colors: true
// 		}
// 	}).listen(8080, "localhost", function(err) {
// 		if(err) throw new gutil.PluginError("webpack-dev-server", err);
// 		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
// 	});
// });