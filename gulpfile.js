/*********************
 *   Node Packages   *
 *********************/
var gulp              = require('gulp');
var connect           = require('gulp-connect');
var sass              = require('gulp-sass');
var sourcemaps        = require('gulp-sourcemaps');
var uglify            = require('gulp-uglify');
var util              = require('gulp-util');
var del               = require('del');
var mainBowerFiles    = require('main-bower-files');
var runSequence       = require('run-sequence');





/************************
 *   Global Variables   *
 ************************/
var appPath    = 'www/app';
var assetsPath = 'www/assets';

var cssPath    = assetsPath + '/css';
var jsPath     = assetsPath + '/js';
var libsPath   = assetsPath + '/libs';
var scssPath   = assetsPath + '/scss';

var watchPaths = {
  js     : [assetsPath + '/js/**/*.js', appPath + '/**/*.js'],
  scss   :  assetsPath + '/scss/**/*.scss',
  images :  assetsPath + '/images/**/*',
  content:  assetsPath + '/content/**/*',
  html   : [appPath    + '/**/*.html', 'www/index.html']
};





/*******************
 *   Single Task   *
 *******************/

/**
 * Clean
 */
gulp.task('clean', function(cb) {
  util.log('  [ CLEAN ]');
  del([
    libsPath + '/*',
    cssPath + '/*',
  ], cb);
});

/**
 * Prepare libs
 */
gulp.task('libs', function() {
  util.log('  [ PREPARE LIBS ]');
  return gulp.src(mainBowerFiles(), { base: './bower_components' })
    .pipe(gulp.dest(libsPath));
});

/**
 * Prepare Foundation
 */
gulp.task('zf', function() {
  util.log('  [ PREPARE ZURB FOUNDATION ]');

  // Copy the foundation _settings.scss and _functions.scss to the project scss
  // folder if it doesn't exist. Please note that if you update the Foundation
  // version, your current _settings.scss and _functions.scss may be outdated.
  var fs = require('fs');
  if (!fs.existsSync(scssPath + '/foundation/_settings.scss')) {
    util.log('  Copy the foundation _settings.scss and _functions.scss to the project scss folder.');
    return gulp.src(libsPath + '/foundation/scss/foundation/*.scss')
      .pipe(gulp.dest(scssPath + '/foundation'));
  } else {
    util.log('  _settings.scss exists in project scss folder. Skip the copy.');
    return;
  }
});

/**
 * Minify libs JS
 */
gulp.task('jsmin', function() {
  util.log('  [ MINIFY LIBS JS ]');
  return gulp.src(libsPath + '/**/*.js', {base: './'})
    .pipe(sourcemaps.init())
      .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});

/**
 * Compile and livereload SASS
 */
gulp.task('sass', function() {
  util.log('  [ COMPILE SASS ]');
  return gulp.src(scssPath + '/app.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(cssPath))
    .pipe(connect.reload());
});

/**
 * Livereload
 */
gulp.task('reload', function() {
  util.log('  [ LIVERELOAD ]');
  return gulp.src('')
    .pipe(connect.reload());
});

/**
 * Watch SASS and JS
 */
gulp.task('watch', function() {
  util.log('  [ WATCH HTML, SASS AND JS ]');
  gulp.watch(watchPaths.scss, ['sass']);
  gulp.watch([watchPaths.js, watchPaths.html], ['reload']);
});

/**
 * Optimize JS
 */
gulp.task('optimize', function() {
  // TODO:
});





/************************
 *   Sequential Tasks   *
 ************************/

/**
 * Build for development
 */ 
gulp.task('build:dev', function(cb) {
  runSequence(
    'clean',
    'libs',
    'zf',
    'sass',
    cb
  )
});

/**
 * Build for production
 */
gulp.task('build:prod', function(cb) {
  runSequence(
    'clean',
    'libs',
    'zf',
    'jsmin',
    'sass',
    cb
  )
});

/**
 * Start dev server
 */
gulp.task('connect:dev', ['build:dev'], function() {
  util.log('  [ START DEV SERVER ]');
  connect.server({
    root: 'www',
    port: 10000,
    livereload: true
  });
});

/**
 * Start prod server
 */
gulp.task('connect:prod', ['build:prod'], function() {
  util.log('  [ START PROD SERVER ]');
  connect.server({
    root: 'www',
    port: 18000
  });
});





/********************************
 *   Common and Default Tasks   *
 ********************************/
gulp.task('dev',     ['connect:dev', 'watch']);
gulp.task('prod',    ['connect:prod']);
gulp.task('default', ['dev']);