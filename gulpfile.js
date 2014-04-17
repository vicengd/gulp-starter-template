var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
	    .pipe(minifyCss({
	      keepSpecialComments: 0
	    }))
	    .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('css'));
});

gulp.task('compress', function() {
  gulp.src('src/js/*.js')
  	.pipe(gulp.dest('js'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('js'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js", "*.html"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync', 'compress'], function () {
    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/js/*.js", ['compress']);
});