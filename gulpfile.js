var gulp = require('gulp');
var uglify = require('gulp-uglify');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task('dist', function() {
  gulp.src('src/L.Deflate.js')
    .pipe(uglify().on('error', function(e){console.log(e);}))
    .pipe(gulp.dest('dist'))
});

gulp.task('test', function () {
    return gulp
    .src('tests/testrunner.html')
    .pipe(mochaPhantomJS({
        phantomjs: {
            'ssl-protocol': 'tlsv1',
            'viewportSize': {
                width: 1024,
                height: 768
            }
        }
    }));
});
