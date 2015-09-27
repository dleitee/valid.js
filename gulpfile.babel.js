/**
*
* Gulpfile for validate.js
*
* @author Daniel Leite de Oliveira <dleitee@gmail.com>
*
*/

import gulp from 'gulp'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import buffer from 'vinyl-buffer'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'


gulp.task('js', () => {
  gulp.src('src/**/*.js')
    .pipe(babel())
    //.pipe(concat('validate.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
// browserify({
//     entries: './src/validate.js',
//     //extensions: ['.js'],
//     //insertGlobals : true,
//     //debug: true
//   })
//   .transform(babelify)
//   .bundle()
//   .pipe(source('validate.js'))
//   .pipe(buffer())
//   //.pipe(uglify())
//   .pipe(gulp.dest('dist'));
})
