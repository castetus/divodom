'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    clean = require('gulp-clean'),
    pug = require('gulp-pug'),
    minify = require('gulp-minify'),
    cssnano = require('gulp-cssnano');
// common
function cleanTask(){
    return gulp.src(['dist/style.css', 'src/css/**/*.css'])
        .pipe(clean())
}
function html(){
    return gulp.src('src/pages/**/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('dist'))
}
function css(){
    return gulp.src('src/**/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist'))
}
function jsConcat(){
    return gulp.src('src/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
}
function font(){
    return gulp.src('src/fonts/*.*')
        .pipe(font64())
        .pipe(concat('fonts.css'))
        .pipe(gulp.dest('dist'));
}
function browserSyncf(){
    browserSync.init(['./dist/**/**.**'],{
        port: 8000,
        server: {
            baseDir: 'dist'
        },
        notify: false
    });
}
function img(){
    return gulp.src('src/img/**/*')
        .pipe(image())
        .pipe(gulp.dest('dist/img'));
}
function watchTask(){
    gulp.watch('src/**/*.scss', {usePolling: true}, gulp.series(css));
    gulp.watch('src/**/*.pug', gulp.series(html));
    gulp.watch('src/**/*.js', gulp.series(jsConcat));
}
// production
function cssMin(){
    return gulp.src('dist/style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
}
function minifyJs(){
    return gulp.src('dist/js/main.js')
        .pipe(minify())
        .pipe(gulp.dest('dist/js'));
}

exports.minifyJs = minifyJs;
exports.cssMin = cssMin;
exports.js = jsConcat;
exports.img = img;
exports.cleanTask = cleanTask;
exports.html = html;
exports.css = css;
// exports.concats = concats;
exports.sync = browserSyncf;
exports.watch = watchTask;

exports.dev = gulp.parallel(gulp.series(html, css, jsConcat, browserSyncf), watchTask);
exports.prod = gulp.parallel(html, gulp.series(cleanTask, css, cssMin), gulp.series(jsConcat, minifyJs), img, font);
