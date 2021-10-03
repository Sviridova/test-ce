"use strict";
var gulp = require("gulp");
var less = require('gulp-less');
var path = require('path');
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task('less', function () {
  return gulp.src('./app/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task("js", function () {
  return gulp.src("./app/js/*.js")
    .pipe(concat("index.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(gulp.dest("dist/js"));
});
