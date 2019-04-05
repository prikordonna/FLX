const {src, dest, task, series, watch} = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const path = require('path');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const browserSync = require('browser-sync').create();
var imagemin = require('gulp-tinypng');
const htmlmin = require('gulp-htmlmin');
var sourcemaps = require('gulp-sourcemaps');

function minify () {
    return src('src/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(dest('dist'));
  };

function tinyPng () {
    return src('./src/img/**/*.jpg')
        .pipe(imagemin('X4e5ZdPeS8xd8i3onrp9YYhwukmGGl8r'))
        .pipe(dest('./dist/img'))
};

function sassTask () {
    return src('./src/less/**/*.scss')
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(concat('style.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/css'))
};


function jsTask () {
    return src('./src/js/**/*.js')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('app.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest('./dist/js'))
}

task('default', series(tinyPng, minify, sassTask, jsTask))

let serverTask = () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
};

exports.serve = () => {
    serverTask();
    watch('src/less/*.scss', sassTask).on('change', browserSync.reload);
    watch('src/js/*.js', jsTask).on('change', browserSync.reload);
    watch("src/*.html").on('change', browserSync.reload);
}