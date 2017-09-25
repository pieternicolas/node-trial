const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const babel = require('gulp-babel');
const Cache = require('gulp-file-cache');
const uglify = require('gulp-uglify');
const mocha = require('gulp-mocha');
const pump = require('pump');
const cache = new Cache();

/*
* To minify all js into server-ready files
*/
gulp.task('compress', (cb) => {
  pump([
      gulp.src('./src/**/*.js'),
      babel({
        presets: ['env']
      }),
      uglify(),
      gulp.dest('./dist')
    ],
    cb
  );
});

/*
* To run unit tests with Mocha
*/
gulp.task('test', () => {
  gulp.src('./test', {read: false})
    .pipe(mocha({
      reporter: 'list',
      compilers: 'js:babel-register'
    }))
});

/*
* To watch files for changes, compiles, and restarts the nodemon server on change
*/
gulp.task('compile', () => {
  const stream = gulp.src('./src/**/*.js')      // watch for changes
                 .pipe(cache.filter())          // filter out files that didn't change in cache
                 .pipe(babel({
                   presets: ['env']             // pipe through babel-preset-env
                 }))
                 .pipe(cache.cache())           // store changed files in cache
                 .pipe(gulp.dest('./dist'));    // spit out built files in /dist

  return stream;
});

gulp.task('watch', ['compile'], () => {
  const stream = nodemon({
                   script: 'dist/server.js',    // run ES5 code 
                   watch: 'src',                // watch ES2015 code 
                   tasks: ['compile'],          // compile synchronously onChange 
                 })
                 .on('restart', ['test']);      // on restart, start test
 
  return stream;
});

gulp.task('watch-no-test', ['compile'], () => {
  const stream = nodemon({
                   script: 'dist/server.js',    // run ES5 code 
                   watch: 'src',                // watch ES2015 code 
                   tasks: ['compile'],          // compile synchronously onChange 
                 });
 
  return stream;
});

gulp.task('watch-lite', () => {
  const stream = nodemon({
                   script: 'dist/server.js',    // run ES5 code 
                   watch: 'src'                 // watch ES2015 code 
                 });
 
  return stream;
});