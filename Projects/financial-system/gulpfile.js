/*引入插件*/
var  VERSION="0.0.1"
var gulp=require("gulp"),
    less=require("gulp-less"),
    clean=require("gulp-clean"),
    requirejsOptimize=require('gulp-requirejs-optimize'),
    concat = require('gulp-concat'),
    uglify = require("gulp-uglify");           //合并 ;

var path = require('path');
var ROOT_PATH = __dirname;
var LESS_PATH = path.resolve(ROOT_PATH,"dj_less/less");
var DEV_CSS_PATH = path.resolve(ROOT_PATH,"develop/static/css");
var WATCH_PATH = path.resolve(ROOT_PATH,"dj_less");
var AMD_PATH = path.resolve(ROOT_PATH,"develop/static/modules");
var JS_PATH = path.resolve(ROOT_PATH,"develop/static/js");

/*task任务编译LESS*/
gulp.task("less",['clean'],function(){
    console.log(DEV_CSS_PATH)
    gulp.src(LESS_PATH+"/*.less")
        .pipe(less({compress: false}))
        .on("error",function(e){console.log(e)})
        .pipe(gulp.dest(DEV_CSS_PATH));
});

/*task任务编译LESS*/
gulp.task("cssmin",['clean'],function(){
    console.log(DEV_CSS_PATH)
    gulp.src(LESS_PATH+"/*.less")
        .pipe(less({compress: true}))
        .on("error",function(e){console.log(e)})
        .pipe(gulp.dest(DEV_CSS_PATH));
});
/*清理CSS*/
gulp.task("clean", function(){
    gulp.src(DEV_CSS_PATH+"/*.css", { read:true })
        .pipe(clean());
});

gulp.task('rjs',function(){
    gulp.src(AMD_PATH+"/*.js")
        .pipe(requirejsOptimize())
        // .pipe(concat("loginMain.js"))           //合并  
        .pipe(gulp.dest(JS_PATH+"/release/"+VERSION+"/"))          //输出保存  
        // .pipe(rename("index.min.js"))          //重命名  
        // .pipe(uglify())                        //压缩  
        // .pipe(gulp.dest(JS_PATH+"/release/"+VERSION+"/"));         //输出保存
})

/*监控文件变化自执行*/
gulp.task('watch', function () {
   gulp.watch([WATCH_PATH+'/**/*.less'],function(){
     gulp.run('less','watch');
   });
});
/*初始化任务*/
gulp.task('default',function(){
    gulp.run('less','watch');
})




/*执行打包任务*/
gulp.task('pack',function(){
    gulp.run('cssmin','rjs');
})




