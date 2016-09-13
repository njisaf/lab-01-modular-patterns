'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('hello', function(){
  console.log('hello');
});

gulp.watch('***/*.js', ['hello']); //if any .js files change, hello will run

gulp.task('lint', () => { //taken from gulp-eslint docs
  return gulp.src()
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('test', function(){
  gulp.src('./test/*-test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('dev', function(){
  gulp.watch(['**/*.js','!node_modules/**'], ['test', 'lint']);
});

gulp.task('default', ['dev']);
