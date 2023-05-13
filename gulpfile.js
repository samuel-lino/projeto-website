const gulp = require('gulp');
const {parallel} = require('gulp')
const min = require('gulp-cssmin');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const jscript = require('gulp-uglify');
const image = require('gulp-image');
const stripcoment = require('gulp-strip-comments');
const stripcsscoment = require('gulp-strip-css-comments');
const htmlmin = require('gulp-htmlmin');

function tarefascss(cb){

    gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/font-awesome/css/font-awesome.css',
            './vendor/owl/css/owl.css',
            './vendor/jquery-ui/jquery-ui.css',
            './assets/css/style.css',
            ])
        .pipe(concat('libs.css'))
        .pipe(stripcsscoment())
        .pipe(min())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))

    return cb()
};

function tarefasjs(cb){

    gulp.src(['./node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './vendor/owl/js/owl.js',
            './vendor/jquery-mask/jquery.mask.js',
            './vendor/jquery-ui/jquery-ui.js',
            './assets/js/custom.js'])
        .pipe(concat('libs.js'))
        .pipe(stripcoment())
        .pipe(jscript())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
    
    return cb()
};


function tarefasimage(cb){

    gulp.src('./assets/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true // defaults to false
            }))
        .pipe(gulp.dest('./dist/images'))

    return cb()
};

function tarefashtml(cb){
    return gulp.src('assets/**/*.html')
                .pipe(htmlmin({collapseWhitespace: true}))
                .pipe(gulp.dest('./dist'))
    
    
};



exports.estilo = tarefascss
exports.script = tarefasjs
exports.images = tarefasimage
exports.html = tarefashtml
exports.default = parallel(tarefascss, tarefashtml, tarefasjs, tarefasimage)

gulp.task('exectarefas', () => {
    
})