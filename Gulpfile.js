var gulp = require('gulp'),
    mainBowerFiles = require('main-bower-files'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    gulpFilter = require('gulp-filter'),
    addsrc = require('gulp-add-src'),
    minifyCss = require('gulp-minify-css'),
    replace = require('gulp-replace'),
	order = require("gulp-order"),
	postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');
    
gulp.task('prepare-font-awesome', function(){
	gulp.src('./bower_components/font-awesome/css/font-awesome.css')
		.pipe(gulp.dest('assets/libs/css'));
		
	gulp.src('./bower_components/font-awesome/fonts/*')
	    .pipe(gulp.dest('build/fonts/'));    
});

gulp.task('fetch-js-libs', function(){
	var js_filter = gulpFilter('*.js');
	
	gulp.src(mainBowerFiles())
		.pipe(js_filter)
		.pipe(gulp.dest('assets/libs/js'));
});

gulp.task('fetch-css-libs', function(){
	var css_filter = gulpFilter('*.css');
	
	gulp.src(mainBowerFiles())
		.pipe(css_filter)
		.pipe(gulp.dest('assets/libs/css'));
});

gulp.task('move-modernizr', function(){
    gulp.src('./assets/libs/js/modernizr.js')
		.pipe(gulp.dest('build/js'));
});

gulp.task('bundle-bottom-page-js-libs', function(){
	gulp.src([
        'assets/libs/js/fastclick.js'
	])
    .pipe(order([
        'assets/libs/js/fastclick.js'
    ], {base: './'}))
    .pipe(concat('libs-bottom.js'))
    .pipe(uglify({
        preserveComments: 'some'
    }))
    .pipe(gulp.dest('build/js'));
});

gulp.task('bundle-top-page-js-libs', function(){
	gulp.src([
	    'assets/libs/js/snap.svg.js',
	    'assets/libs/js/jquery.js',
	])
	.pipe(order([
	    'assets/libs/js/snap.svg.js',
        'assets/libs/js/jquery.js'
    ], {base: './'}))
    .pipe(concat('libs-top.js'))
    .pipe(uglify({
        preserveComments: 'some'
    }))
    .pipe(gulp.dest('build/js'));
});

gulp.task('bundle-css-libs', function(){
	gulp.src('assets/libs/css/**/*.css')
		.pipe(minifyCss())
		.pipe(concat('libs.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('prepare-my-css', function(){
	gulp.src('build/css/**/*.css')
	    .pipe(postcss([ 
	        autoprefixer({ 
	            browsers: [
                    'Firefox >= 1',
                    'Chrome >= 1',
                    'Safari >= 5',
                    'Edge >= 1',
                    'IE >= 9',
                    'iOS >= 6',
                    'ChromeAndroid >= 1',
                    'FirefoxAndroid >= 1',
                    'Android >= 4'
			    ]
	        }) 
	    ]))
        .pipe(minifyCss())
        .pipe(gulp.dest('build/css'));
});