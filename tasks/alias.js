import gulp from "gulp";

gulp.task("dev", ["html", "vendor", "js"]);

gulp.task("default", ["dev"]);
