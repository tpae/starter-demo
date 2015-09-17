
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('scripts', function () {
    gulp.src(['jsx/main.jsx'])
      .pipe(browserify({
          extensions: ['.js', '.es6.js', '.jsx'],
          transform: [ 'babelify' ]
      }))
      .pipe(rename('main.js'))
      .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  gulp.watch(['./jsx/**/*'], ['scripts']);
});

gulp.task('default', ['scripts']);