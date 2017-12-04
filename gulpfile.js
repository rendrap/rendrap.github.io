var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();
var uncss = require('gulp-uncss');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('build', shell.task('bundle exec jekyll build --watch -V --profile -t'));
gulp.task('build_prep', shell.task('bundle exec jekyll build --watch -V --profile -t'));

gulp.task('autoprefixer', () => {
	const AUTOPREFIXER_BROWSERS = [
	  'ie >= 10',
	  'ie_mob >= 10',
	  'ff >= 30',
	  'chrome >= 34',
	  'safari >= 7',
	  'opera >= 23',
	  'ios >= 7',
	  'android >= 4.4',
	  'bb >= 10'
	];

  return gulp.src('_site/css/main.css')
        .pipe(autoprefixer({
            AUTOPREFIXER_BROWSERS,
            cascade: false
        }))
        .pipe(gulp.dest('_site/css/'));
});

gulp.task('serve', function () {

	browserSync.init({
		server: {baseDir: '_site/'},
		host: "192.168.1.4",
		port: 3000,
		logPrefix: 'D-Jtheme',
	});

	gulp.watch('_site/**/*.*').on('change', browserSync.reload);

});


gulp.task('post', function() {
	return gulp.src('_site/css/main.css')

	.pipe(uncss({
		html: ['index.html','_posts/**/*.html','_includes/*.html','_layouts/*.html']
	}))
	.pipe(gulp.dest('_site/css/'));
});

gulp.task('default', ['build','autoprefixer','post','serve']);
gulp.task('prep', ['build_prep','autoprefixer','serve']);
