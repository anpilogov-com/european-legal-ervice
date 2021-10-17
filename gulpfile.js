const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const svgo = require("gulp-svgo");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const minify = require("gulp-minify");

gulp.task("scss", () => {
   return gulp
      .src("./styles/scss/*.scss")
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("./styles/css/"));
});

gulp.task("svgo", () => {
   return gulp.src("./images/*.svg").pipe(svgo()).pipe(gulp.dest("./images/squoosh/"));
});

gulp.task("cssmin", () => {
   return gulp
      .src("./styles/css/style.css")
      .pipe(cssmin())
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest("./styles/css/"));
});

gulp.task("compress", () => {
   return gulp.src(["./scripts/*.js", "./scripts/*.mjs"]).pipe(minify()).pipe(gulp.dest("./scripts/"));
});

gulp.task("default", () => {
   gulp.watch("./styles/scss/", gulp.series("scss"));
});
