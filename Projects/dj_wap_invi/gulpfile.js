/*引入插件*/
var gulp=require("gulp"),
    less=require("gulp-less"),
    clean=require("gulp-clean");

var cssPath=__dirname+"/develop/static/css/"
/*task任务编译LESS*/
gulp.task("less",['clean'],function(){
    console.log(cssPath)
    gulp.src("./Mosa/less/*.less")
        .pipe(less({compress: false}))
        .on("error",function(e){console.log(e)})
        .pipe(gulp.dest(cssPath));
});
/*清理CSS*/
gulp.task("clean", function(){
    gulp.src(cssPath+"/*.css", { read:true })
        .pipe(clean());
});


/*监控文件变化自执行*/
gulp.task('watch', function () {
   gulp.watch(['./Mosa/**/*.less'],function(){
     gulp.run('less','watch');
   });
});



/*初始化任务*/
gulp.task('default',function(){
    gulp.run('less','watch');
})



