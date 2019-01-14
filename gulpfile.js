var install = require("gulp-install");
 
gulp.src(['./bower.json', './package.json'])
  .pipe(install());

gulp.task('analyze', function() {
    log('Analyzing code with JSHint and JSCS.');
    return gulp
        .src('./src/scripts') // glob pattern for all of my JS

        // utilizes gulp-if and gulp-print to check for cmd args
        .pipe(plugins.if(args.verbose, plugins.print()))

        // utilizes gulp-jscs to inspect JS
        .pipe(plugins.jscs())

        // utilizes gulp-jshint to inspect JS
        .pipe(plugins.jshint())

        // utilizes jshint-stylish to show the results
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

function log(msg) {
   // utilizes gulp-util's log function
    plugins.util.log(plugins.util.colors.blue(msg));
}