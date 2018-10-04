'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./app/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./app/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./app/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./app/images/**/*.*', $.gulp.series('copy:image'));
    $.gulp.watch('./app/images/icons/*.*', $.gulp.series('sprite:svg'));
  });
};
