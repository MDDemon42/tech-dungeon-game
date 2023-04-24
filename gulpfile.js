const gulp = require('gulp');
const ts = require('gulp-typescript');
const fs = require('fs')
const zip = require('gulp-zip');

const tsProject = ts.createProject('tsconfig.json');

const build = {
    buildDir: 'build/',
    publicDir: 'public/**'
};

gulp.task('build', function () {
    return gulp.src('background/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest(build.buildDir));
});

gulp.task('archive', function () {
    const manifest = JSON.parse(fs.readFileSync('./public/manifest.json'))
    log(manifest.version);

    return gulp.src('build/**')
        .pipe(zip('stands-chrome-mv3-v' + manifest.version + '.zip'))
        .pipe(gulp.dest('dist'))
});

gulp.task('default',
    gulp.series('build')
);

gulp.task('dist',
    gulp.series('default', 'archive')
);