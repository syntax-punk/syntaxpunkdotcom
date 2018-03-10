'use strict';

const watchify = require('watchify');
const browserify = require('browserify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gutil = require('gulp-util');
const babelify = require('babelify');
const envify = require('envify');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


const supportedBrowsers = ['last 2 versions', 'IE 9'];

// add custom browserify options here
const customOpts = {
  entries: ['./src/js/main.js'],
  debug: true
};

const opts = Object.assign({}, watchify.args, customOpts);

watchify.args.debug = true;
var b = watchify(browserify(opts), watchify.args);

// add transformations here
// i.e. b.transform(coffeeify);
b.transform(babelify);
b.transform(envify);

gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // outpust build logs to terminal

function bundle() {
    process.env.NODE_ENV = 'development';
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
       .on('error', gutil.log)
    .pipe(gulp.dest('./static/js'))
    .pipe(browserSync.stream());
}

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
    return gulp.src("./src/sass/**/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("./static/css"))
        .pipe(browserSync.stream());
});

// Copy and compress images 
gulp.task('img:copy', () => {
    return gulp.src("./src/img/**/*")   
        .pipe(gulp.dest("./static/img"))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass', 'img:copy'], () => {
    browserSync.init({
        server: {
            baseDir: '.'
        },
        open: false,
        reqHeaders: function(config) {
            return {
                "host": config.urlObj.host
            }
        }
        
    });

    gulp.watch('./src/scss/**/*.scss', ['sass', 'img:copy']);

    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);