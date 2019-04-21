const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

const src = {
	js: './assets/js/*.js',
	scss: './assets/sass/**/*.scss',
	html: './**/*.html',
	all: './assets/**/*.*'
}

const dest = {
	js: './dist/js',
	css: './dist/css'
}

gulp.task('sass', () => {
	gulp.src(src.scss)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(dest.css))
})

gulp.task('transpile', () => {
	gulp.src(src.js)
		.pipe(babel())
		.pipe(gulp.dest(dest.js))
})

gulp.task('default', () => { 
	
	browserSync.init({server: "./"});
	gulp.watch(src.scss, ['sass'])
	gulp.watch(src.js, ['transpile'])
  gulp.watch(src.html).on('change', browserSync.reload)
  gulp.watch(src.all).on('change', browserSync.reload)
});
