import path from "path";
import gulp from "gulp";
import gulpLoadPlugins from "gulp-load-plugins";
import through2 from "through2";
import browserify from "browserify";
import exposify from "exposify";
import babelify from "babelify";
import bundleCollapser from "bundle-collapser/plugin";
import config from "./config";

var plugins = gulpLoadPlugins();

var onError = function (err) {
    console.error(err);
    this.emit("end");
};

// Compile JS
gulp.task("js", () => {
    var bundler = through2.obj((file, enc, next) => {
        browserify(file.path, {
            debug: true,
            plugin: [bundleCollapser],
            bundleExternal: false,  // Don't load external requires
            extensions: [".js", ".jsx"]
        })
            .transform(babelify, {
                presets: ["es2015", "react"],
                plugins: ["transform-class-properties", "transform-decorators"]
            })
            .transform(exposify, {
                expose: {
                    "react": "React",
                    "react-dom": "ReactDOM",
                    "immutable": "Immutable",
                    "redux": "Redux",
                    "react-redux": "ReactRedux",
                    "classnames": "classNames",
                    "axios": "axios",
                    "uniloc": "uniloc",
                    "redux-thunk": "thunk"
                },
                filePattern: /\.jsx?$/
            })
            .bundle((err, res) => {
                if (err) {
                    return next(err);
                }
                file.contents = res;
                next(null, file);
            });
    });

    return gulp
        .src(path.join(config.dir.src, config.file.indexJs))
        .pipe(plugins.plumber({
            errorHandler: onError
        }))
        .pipe(bundler)
        .pipe(gulp.dest(config.dir.dist));
});
