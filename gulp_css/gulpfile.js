var gulp = require('gulp');
var postcss = require('gulp-postcss');
 
gulp.task('css', function () {
  return gulp.src('./src/*.css').pipe(
    postcss([
      require('postcss-salad')({
        "browsers": ["ie > 8", "last 2 versions"],
        "features": {
          "bem": {
            "shortcuts": {
              "component": "b",
              "modifier": "m",
              "descendent": "e"
            },
            "separators": {
              "descendent": "__",
              "modifier": "--"
            }
          }
        }
      })
    ])
  ).pipe(
    gulp.dest('./dest')
  );
});