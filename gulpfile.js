const gulp = require('gulp');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');
const { fork } = require('child_process');
const { join } = require('path');

const PATHS = {
  server: './src/server',
  tsconfig: './src/server/tsconfig.json',
};

gulp.task('server:ts', done => {
  const tsProject = ts.createProject(PATHS.tsconfig);
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(gulp.dest('build'))
    .on('error', error => done(error))
    .on('end', () => done());
});

gulp.task('server:partials', () => {
  return gulp.src(['src/server/app/partials/*']).pipe(gulp.dest('build/app/partials'));
});

gulp.task('server:watch', done => {
  const stream = nodemon({
    script: 'build/bin/www.js',
    env: { NODE_ENV: 'local' },
    ext: 'ts',
    watch: PATHS.server,
    tasks: ['server:build'],
    stdout: false,
  });
  return stream
    .on('readable', function() {
      const bunyanProcess = fork(
        join('node_modules', '.bin', 'bunyan'),
        ['--output', 'json'],
        { silent: true },
      );
      bunyanProcess.stdout.pipe(process.stdout);
      bunyanProcess.stderr.pipe(process.stderr);
      this.stdout.pipe(bunyanProcess.stdin);
      this.stderr.pipe(bunyanProcess.stdin);
    })
    .on('quit', function() {
      done();
    });
});

gulp.task('server:build', gulp.series('server:ts', 'server:partials'));
gulp.task('server:dev', gulp.series('server:build', 'server:watch'));
