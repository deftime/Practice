const {src, dest, parellel, series, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify-es').default;

function style() {
  return src('./scss/style.scss')
         .pipe(sass({outputStyle: 'compressed'}))
         .pipe(concat('all.min.css'))
         .pipe(autoprefixer())
         .pipe(dest('./dist/'))
};

function scripts() {
  return src('./js/**/*.js')
         .pipe(concat('all.min.js'))
         .pipe(uglify())
         .pipe(dest('./dist/'))
}

function watcher() {
  watch('./scss/style.scss', style);
  watch('./js/**/*.js', scripts);
}



exports.style = style;
exports.scripts = scripts;
exports.watch = watcher;
exports.default = series(style, scripts);
