# 友盟页面统计和事件统计的代码部署

### 1. 页面访问量统计代码部署

* web网页将以下代码放置于页面的&lt;/body&gt;前，或放置于公共引用的文件中：

        <style>#cnzz_stat_icon_1258694966 {display: block;height: 0; overflow: hidden;}</style><script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1258694966'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s11.cnzz.com/z_stat.php%3Fid%3D1258694966' type='text/javascript'%3E%3C/script%3E"));</script>


* wap网页下载cs.php文件放置于项目文件夹中，并用php方式引用至页面 **(注意文件路径)**
    
        <?php require_once 'cs.php';echo '<img src="'._cnzzTrackPageView(1258694966).'" width="0" height="0"/>';?>

### 2. 事件追踪统计代码部署

* step 1 : 将以下代码放置于页面的&lt;/head&gt;之前，或放置于公共引用的文件中：

        <script>
            var _czc = _czc || [];
            _czc.push(["_setAccount", "1258694966"]);
        </script>

* step 2 : 将以下代码放置于页面的&lt;/body&gt;前，或放置于公共引用的文件中：

        <style>#cnzz_stat_icon_1258694966 {display: block;height: 0; overflow: hidden;}</style><script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1258694966'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s11.cnzz.com/z_stat.php%3Fid%3D1258694966' type='text/javascript'%3E%3C/script%3E"));</script>

* step 3 : 创建一个发起追踪的js函数：

        var trackEventFn = function(trackOptions){
            try {
                var category = trackOptions.category,
                    action = trackOptions.action,
                    label = trackOptions.label;
                _czc.push(["_trackEvent",category,action,label]);
            } catch(e) {
                //console.log(e);
            }
        }

* step 4 : 埋点参数介绍
    
    事件追踪埋点需要设置3个参数，分别为：

        trackOptions = {
            category : '',
            action   : '',
            label    : ''
        }

    * `category` ：事件类别，必填项，表示事件发生在谁身上，如“视频”、“小说”、“轮显层”等等。
    * `action`：事件操作，必填项，表示访客跟元素交互的行为动作，如"播放"、"收藏"、"翻层"等等。
    * `label`：事件标签，选填项，用于更详细的描述事件，从各个方面都可以，比如具体是哪个视频，哪部小说，翻到了第几层等等。

    关于CNZZ事件追踪的更多参数和部署说明文档，可以参考umeng[官方文档](http://open.cnzz.com/a/new/trackevent/?spm=0.0.0.0.9KdkRR)

* step 5 : 埋点

        trackEventFn(trackOptions);
