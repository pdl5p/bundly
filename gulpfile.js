var gulp = require('gulp');
var webpack = require('gulp-webpack');

var options = require('./webpack.config');

gulp.task('default', function(){

    return gulp.src('./src/index.js')
                .pipe(webpack(options))
                .pipe(gulp.dest('./dist'));
});