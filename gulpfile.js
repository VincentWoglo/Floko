const { series, watch, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');

function Sass(){
    return gulp.src('./src/Styles/Scss/**/*.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(gulp.dest('./src/Styles/Css'))
}

function WatchTask(){
    watch('./src/Styles/Scss**/*.scss',
    series(Sass))
}

exports.default = series(
        parallel(Sass),
        WatchTask
    )