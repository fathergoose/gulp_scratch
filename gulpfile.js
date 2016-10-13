const gulp = require('gulp');
const sass = require('gulp-sass')

const sassFiles = 'assets/styles/sass/**/*.scss'
const cssDest = 'assets/styles/css/'

gulp.task('default', () => {
	console.log('GULP GULP GULP! Aaaahhh');
});

gulp.task('styles', () => {
	gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(cssDest));
});

// Ensure the sass files recompile on change
// Assuming this says watch these files,
// if anything changes, run `gulp styles`
gulp.task('watch', () => {
	gulp.watch(sassFiles, ['styles'])
})
