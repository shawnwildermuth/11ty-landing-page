const { src, parallel, dest } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const uglifycss = require("gulp-uglifycss");
const del = require("del");
const rename = require("gulp-rename");

function clean() {
  return del(["_site/js/"]);
}

function siteJs() {
  return src("src/_includes/js/site.js")
  .pipe(uglify())
  .pipe(rename("hwfilm.min.js"))
  .pipe(dest("_site/js/"));
}

exports.clean = clean;
exports.siteJs = siteJs;
exports.default = parallel(siteJs);
