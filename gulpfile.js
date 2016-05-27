var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var ts = require('gulp-typescript');
var babelify = require('babelify');
var browserify = require('gulp-browserify');
var historyApiFallback = require('connect-history-api-fallback');
var directorio = {

  jade: ['app/templates/jade/*.jade'],
  stylus: ['app/static/stylus/styles.styl']

};

gulp.task('stylus', function () {
  gulp.src(directorio.stylus)
    .pipe(plumber())
    .pipe(stylus({
      compress: true
      }))
    .pipe(gulp.dest('app/static/css/'))
    .pipe(connect.reload());

});


gulp.task('browserify', function () {
  gulp.src('app/static/js/*.js')
    .pipe(browserify({
      transform: ['babelify'],
    }))
    .pipe(gulp.dest('app/static/js/*.js'))
});
gulp.task('templates', function() {

  return gulp.src(directorio.jade)
    .pipe(plumber())
    .pipe(jade({
      pretty: true
      }))
    .pipe(gulp.dest('app/templates/html'))
    .pipe(connect.reload());


});
gulp.task('typescript', function () {
  return gulp.src('app/static/ts/*.ts')
    .pipe(ts({
      noImplicitAny: true,

    }))
    .pipe(gulp.dest('app/static/js'));
});
gulp.task('watch', function() {

	gulp.watch('app/static/stylus/styles.styl', ['stylus']),
	gulp.watch('app/templates/jade/*.jade', ['templates'])
  gulp.watch('app/static/ts/*.ts', ['typescript'])
  gulp.watch('app/static/js/*.js', ['browserify'])
});

//creacioon  del server para el livereload

gulp.task('connect', function() {
  connect.server({
    root: 'app/',
    hostname: '0.0.0.0',
    livereload: true,
    port: '3000',
    open: true,
    middleware: function(connect, opt) {
      return [ historyApiFallback() ];
    }
  });
});
gulp.task('default', ['stylus', 'templates', 'typescript', 'watch', 'connect']);
//creacioon  del server para el livereload
