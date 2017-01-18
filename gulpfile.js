'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('sass', function(){
  return gulp.src('scss/haywire.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']);
})