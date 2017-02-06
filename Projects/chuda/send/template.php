<?php require_once('../include/header.php'); ?>

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
            <div class="col-md-offset-2">
                <select name="" id="input" class="form-control" required="required">
                    <option value="">选择模板</option>
                    <option value="">aaa</option>
                    <option value="">bbb</option>
                </select>
                <br>
                <p>
                    【到家美食会】您的订单(" . $deliveryCost . "元)已确认,已安排餐厅（. $restaurant['fields'][0]['Name']）为您制作美食
                </p>
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
                <input type="email" class="form-control" id="" placeholder="">
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
                <label for="content" class="col-sm-2 control-label">单个设备：</label>
                <div class="col-sm-10">
                    <label>
                        <input type="email" class="form-control" id="" placeholder="输入手机号">
                    </label>
                </div>
                <div class="clearfix">&nbsp;</div>
                <label for="content" class="col-sm-2 control-label">批量设备：</label>
                <div class="col-sm-10">
                    <label>
                        <input type="file" name="file" id="input" value="">
                    </label>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="content" class="col-sm-2 control-label">发送时间：</label>
            <div class="col-sm-10 radio">
                <label>
                    <input type="radio" name="device" id="input" value="" checked="checked">
                    立即发送
                </label>
                <label>
                    <input type="radio" name="device" id="input" value="">
                    定时发送
                </label>
            </div>
        </div>

        <div class="col-md-offset-2">
            <button type="button" class="btn btn-success">确定发送</button>
        </div>
    </form>
    
</div>


<?php require_once('../include/footer.php'); ?>