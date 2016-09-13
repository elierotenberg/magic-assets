import eslint from 'gulp-eslint';
import fs from 'fs';
import Promise from 'bluebird';
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';
Promise.promisifyAll(fs);

gulp.task('lint', () => gulp.src(['**/*.js', '!node_modules/**/*.js', '!dist/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
);

gulp.task('uglify', () => gulp.src(['src/primer.js'])
  .pipe(uglify())
  .pipe(gulp.dest('dist'))
);

gulp.task('build', ['lint', 'uglify'], () => gulp.src(['src/**/*.js', '!src/primer.js'])
  .pipe(babel())
  .pipe(gulp.dest('dist'))
);

gulp.task('test', ['lint', 'build'], () => gulp.src('test/**/*.js')
  .pipe(mocha())
);

gulp.task('default', ['build']);
