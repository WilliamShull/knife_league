var gulp = require('gulp');
var mocha = require('gulp-mocha');
var webpack = require('webpack-stream');

gulp.task('webpack:dev', function() {
  return gulp.src('./app/js/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('staticfiles:dev', function() {
  return gulp.src('./app/**/*html')
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
	gulp.watch('./app/**/*html', ['staticfiles:dev']);
});

gulp.task('build:dev', ['staticfiles:dev', 'webpack:dev']);
gulp.task('default', ['build:dev', 'watch']);
