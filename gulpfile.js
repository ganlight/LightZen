var path = require('path');
var fs = require('fs');
var yargs = require('yargs').argv;
var gulp = require('gulp');
var less = require('gulp-less');
var header = require('gulp-header');
var tap = require('gulp-tap');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var pkg = require('./package.json');

var option = {
    base: 'src'
};
var dist = __dirname + '/dist';

gulp.task('build:zenjs', function() {
    var banner = [
        '/*!',
        ' * Zenjs v<%= pkg.version %> (<%= pkg.homepage %>)',
        ' * Author <%= pkg.author %> ',
        ' * Licensed under the <%= pkg.license %> license',
        ' */',
        ''
    ].join('\n');
    gulp.src('dist/temp/*.js', option)
        .pipe(sourcemaps.init())
        .pipe(concat('zenjs.js'))
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist))
        .pipe(rename(function(path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest(dist));
});

gulp.task('build:example:assets', function() {
    gulp.src('src/example/**/*.?(png|jpg|gif|js)', option)
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build:example:style', function() {
    gulp.src('src/example/example.less', option)
        .pipe(less().on('error', function(e) {
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(postcss([autoprefixer]))
        .pipe(nano({
            zindex: false
        }))
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build:example:html', function() {
    gulp.src('src/example/index.html', option)
        .pipe(tap(function(file) {
            var dir = path.dirname(file.path);
            var contents = file.contents.toString();
            contents = contents.replace(/<link\s+rel="import"\s+href="(.*)">/gi, function(match, $1) {
                var filename = path.join(dir, $1);
                var id = path.basename(filename, '.html');
                var content = fs.readFileSync(filename, 'utf-8');
                return '<script type="text/html" id="tpl_' + id + '">\n' + content + '\n</script>';
            });
            file.contents = new Buffer(contents);
        }))
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build:example', ['build:example:assets', 'build:example:style', 'build:example:html']);

gulp.task('release', ['build:style', 'build:example']);

gulp.task('watch', ['release'], function() {
    gulp.watch('src/style/**/*', ['build:style']);
    gulp.watch('src/example/example.less', ['build:example:style']);
    gulp.watch('src/example/**/*.?(png|jpg|gif|js)', ['build:example:assets']);
    gulp.watch('src/**/*.html', ['build:example:html']);
});


// 参数说明
//  -w: 实时监听
//  -s: 启动服务器
//  -p: 服务器启动端口，默认8080
gulp.task('default', ['release'], function() {
    gulp.start('zen');
    if (yargs.s) {
        gulp.start('zen:server');
    }

    if (yargs.w) {
        gulp.start('zen:watch');
    }
});

gulp.task('copy', function() {
    return gulp.src(['src/index.html', 'src/lib/*.js', 'src/example/**/*', 'src/views/**/*'], option)
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('zen:js', function() {
    return gulp.src(['src/js/*.js', 'src/zen/*/index.js'], option)
        .pipe(uglify())
        .pipe(concat('common.js'))
        .pipe(gulp.dest('dist'))
});

gulp.task('zen:views', function() {
    var banner = [].join('\n');
    var pos = 0;
    gulp.src('src/views/*', option)
        .pipe(tap(function(file) {
            console.log(file);
            var dir = path.dirname(file.path);
            banner[pos] = dir;
            console.log(pos);
            pos = pos + 1;
        }))
        .pipe(header(banner, {}))
        .pipe(concat('views1.js'))
        .pipe(gulp.dest(dist))
});

gulp.task('zen:page', function() {
    var html_opt = {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    gulp.src('src/views/**/*.html', option)
        .pipe(htmlmin(html_opt))
        .pipe(tap(function(file) {
            var dir = path.dirname(file.path);
            console.log(file.path);
            var contents = file.contents.toString();
            var pos = file.path.indexOf("views/");
            var pathname = file.path.substring(pos, file.path.length);
            var toname = pathname.replace(".html", "").replace(/\//g, ".").replace(/-/g, "_");
            var prefix = toname + ' = function() {/*';
            var suffix = '*/}'
            contents = prefix + contents + suffix;
            file.contents = new Buffer(contents);
        }))
        .pipe(concat('views.js'))
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('zen:page:script', function() {
    var html_opt = {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    gulp.src('src/views/**/*.js', option)
        .pipe(uglify())
        .pipe(tap(function(file) {
            var dir = path.dirname(file.path);
            console.log(file.path);
            var contents = file.contents.toString();
            var pos = file.path.indexOf("views/");
            var pathname = file.path.substring(pos, file.path.length);
            var toname = pathname.replace(".js", "").replace(/\//g, ".").replace(/-/g, "_");
            var prefix = toname + ' = function() {/*<script>';
            var suffix = '</script>*/}'
            contents = prefix + contents + suffix;
            file.contents = new Buffer(contents);
        }))
        .pipe(concat('views_script.js'))
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('zen:css', function() {
    return gulp.src(['src/css/*.css', 'src/zen/*/index.css'], option)
        .pipe(nano({
            zindex: false
        }))
        .pipe(concat('common.css'))
        .pipe(gulp.dest('dist'))
});

gulp.task('zen:html', function() {
    return gulp.src('src/zen/*/index.html', option)
        .pipe(concat('zen.html'))
        .pipe(gulp.dest('dist'))
});

gulp.task('zen:watch', ['release'], function() {
    gulp.watch('src/*.html', ['zen']);
    gulp.watch('src/css/*.css', ['zen']);
    gulp.watch('src/js/*.js', ['zen']);
    gulp.watch('src/views/**/*', ['zen']);
    gulp.watch('src/zen/**/*', ['zen']);
});

gulp.task('zen:server', function() {
    yargs.p = yargs.p || 40001;
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        ui: {
            port: yargs.p + 1,
            weinre: {
                port: yargs.p + 2
            }
        },
        port: yargs.p,
        startPath: '/'
    });
});

gulp.task('zen', ['copy', 'zen:js', 'zen:css', 'zen:html', 'zen:page', 'zen:page:script']);
