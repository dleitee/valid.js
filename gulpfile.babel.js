/**
*
* Gulpfile for validate.js
*
* @author Daniel Leite de Oliveira <dleitee@gmail.com>
*
*/

import gulp from 'gulp'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import uglify from 'gulp-uglify'
import buffer from 'vinyl-buffer'


gulp.task('js', () => {
  browserify({
    entries: './src/validate.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
})

