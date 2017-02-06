<?php require_once('../include/header.php'); ?>

<div class="main-right">

    <form class="form-horizontal">
    
        <div class="form-group">
            <label for="title" class="col-sm-2 control-label">短信通道配置：</label>
            <div class="clearfix"></div>
            <div class="radio col-md-offset-2">
                <label>
                    <input type="radio" value="">
                    云信
                </label>

                <label>
                    <input type="radio" value="">
                    红树
                </label>
                <label>
                    <input type="radio" value="">
                    自有
                </label>
            </div>
        </div>

        <div class="form-group">
            <label for="title" class="col-sm-2 control-label">推送配置：</label>
            <div class="clearfix"></div>
            <div class="col-sm-10 col-md-offset-2 col-md-3">
              <table class="table table-bordered  table-com-center">
                  <tbody>
                    <tr>
                      <td>渠道</td>
                      <td>消息类型</td>
                    </tr>
                    <tr>
                      <td>百度</td>
                      <td>打开客户端，打开URL</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
        <div class="form-group">
            <label for="title" class="col-sm-2 control-label">单位时间发送量：</label>
            <div class="clearfix"></div>
            <div class="col-sm-10 col-md-offset-2 col-md-3">
              <table class="table table-bordered  table-com-center">
                  <tbody>
                    <tr>
                      <th>触达方式</th>
                      <th>条数/分钟</th>
                      <th>操作</th>
                    </tr>
                    <tr>
                      <td>推送</td>
                      <td>5000</td>
                      <td>编辑</td>
                    </tr>
                    <tr>
                      <td>短信</td>
                      <td>5000</td>
                      <td>编辑</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
        
        <div class="form-group">
            <p class="col-md-offset-2">支持变量：$ 订单金额，$餐厅名称</p>
        </div>
        
    </form>
    
</div>


<?php require_once('../include/footer.php'); ?>