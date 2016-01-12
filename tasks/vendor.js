import path from "path";
import gulp from "gulp";
import browserify from "browserify";
import through2 from "through2";
import babelify from "babelify";
import bundleCollapser from "bundle-collapser/plugin";

import config from "./config";


gulp.task("vendor", () => {
    var bundler = through2.obj((file, enc, next) => {
        browserify(file.path, {
            plugin: [bundleCollapser],
            bundleExternal: true,
            extensions: [".js", ".jsx"]
        })
            .transform(babelify)
            .bundle((err, res) => {
                if (err) {
                    return next(err);
                }
                file.contents = res;
                next(null, file);
            });
    });

    return gulp
        .src(path.join(config.dir.src, config.file.vendorJs))
        .pipe(bundler)
        .pipe(gulp.dest(config.dir.dist));
});
