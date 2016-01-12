import path from "path";
import gulp from "gulp";
import browserSync from "browser-sync";
import config from "./config";


gulp.task("server", ["dev"], () => {
    browserSync({
        ui: false,
        open: false,
        server: {
            baseDir: config.dir.dist
        },
        notify: false,
        files: [
            path.join(config.dir.dist, config.glob.js),
            path.join(config.dir.dist, "**/*.jsx"),
            path.join(config.dir.dist, config.glob.html)
        ]
    });

    gulp.watch([
        path.join(config.dir.src, "**/*.js"),
        path.join(config.dir.src, "**/*.jsx")
    ], ["js"]);
});
