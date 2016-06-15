/**
*
* Gulpfile for validate.js
*
* @author Daniel Leite de Oliveira <dleitee@gmail.com>
*
*/

import gulp from 'gulp';
import uglify from 'gulp-uglify';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babelify from 'babelify';
import es6ify from 'es6ify';
import deglobalify from 'deglobalify';
import source from 'vinyl-source-stream';
import connect from 'gulp-connect';

gulp.task('browserify', () => {
  browserify({
    entries: './src/validate.js',
    transform: [babelify, es6ify, deglobalify],

    // Generate a UMD bundle for the supplied export name.
    // This bundle works with other module systems and sets the name
    // given as a window global if no module system is found.
    standalone: 'valid.js',

    // Enable source maps that allow you to debug your files
    // separately.
    debug: true
  })
  .bundle()
  .pipe(source('validate.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('dist'))
  .pipe(gulp.dest('public'));
});

gulp.task('server', () => {
  connect.server({
    root: ['public', 'dist'],
    port: 8000,
    livereload: true
  });
});

gulp.task('default', ['browserify'], () => {});
