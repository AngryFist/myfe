<?php require_once('../include/header.php'); ?>

<link rel="stylesheet" href="../css/jquery.datetimepicker.css">
<script type="text/javascript" src="../js/jquery.datetimepicker.full.min.js"></script>

<div class="main-right">

    <div class="main-tabs">
      <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="#">推送</a></li>
        <li role="presentation"><a href="#">短信</a></li>
        <li role="presentation"><a href="#">公告</a></li>
      </ul>
    </div>

    <form class="form-horizontal">
    
        <div class="form-group">
            <label for="" class="col-sm-2 control-label">设置内容：</label>
            <div class="col-sm-10 checkbox">
                <label>
                    <input type="checkbox" value="">
                    自定义
                </label>
                <label>
                    <input type="checkbox" value="">
                    使用模板
                </label>
            </div>
        </div>

        <div class="form-group">
            <label for="title" class="col-sm-2 control-label">标题：</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="title" placeholder="标题">
            </div>
        </div>

        <div class="form-group">
            <label for="content" class="col-sm-2 control-label">内容：</label>
            <div class="col-sm-10">
              <textarea class="form-control" id="content" rows="3"></textarea>
            </div>
        </div>

        <div class="form-group form-inline">
            <label for="content" class="col-sm-2 control-label">消息类型：</label>
            <div class="col-sm-10 radio">
                <label>
                    <input type="radio" name="type" id="input" value="" checked="checked">
                    打开客户端
                </label>
                <br><br>
                <label>
                    <input type="radio" name="type" id="input" value="">
                    打开网页
                </label>
                <input type="email" class="form-control" id="" placeholder="Email">
            </div>
        </div>

        <div class="form-group">
            <label for="content" class="col-sm-2 control-label">发送用户：</label>
            <div class="col-sm-10 radio">
                <label>
                    <input type="radio" name="device" id="input" value="" checked="checked">
                    所有设备
                </label>
                <label>
                    <input type="radio" name="device" id="input" value="">
                    指定设备
                </label>
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-offset-2">
                <label for="content" class="col-sm-2 control-label">批量设备：</label>
                <div class="col-sm-10">
                    <label>
                        <input type="file" name="file" id="input" value="">
                        支持txt文件导入，下载模板
                    </label>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="content" class="col-sm-2 control-label">发送时间：</label>
            <div class="col-sm-10 radio">
                <label>
                    <input type="radio" name="sendTime" id="sendType1" value="1" checked="checked">
                    立即发送
                </label>
                <label>
                    <input type="radio" name="sendTime" id="sendType2" value="2">
                    定时发送
                </label>
            </div>
        </div>
        
        <div class="form-group">
            <div class="col-sm-3 col-md-offset-3">
                <input type="text" class="form-control hidden" id="sendTimePicker" value="">
            </div>
        </div>

        <script type="text/javascript">
            var sendTime = 'input[name="sendTime"]', sendTimePicker = '#sendTimePicker';

            $(function(){
                $(sendTime).change(function(){
                    activeDatetimepicker(this.value);
                })
            })

            function activeDatetimepicker(type){
                if(type == 2){
                    $(sendTimePicker).removeClass('hidden');
                    $(sendTimePicker).datetimepicker({
                        lang:"ch",           //语言选择中文
                        format:"Y-m-d",      //格式化日期
                        step : 5,
                        defaultDate : new Date(),
                        timepicker:false
                    });
                }else{
                    $(sendTimePicker).addClass('hidden');
                }
            }

            


        </script>

        <div class="col-md-offset-2">
            <button type="button" class="btn btn-success">确定发送</button>
        </div>
    </form>
    
</div>


<?php require_once('../include/footer.php'); ?>