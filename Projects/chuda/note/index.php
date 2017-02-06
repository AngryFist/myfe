<?php require_once('../include/header.php'); ?>

<link rel="stylesheet" href="../css/jquery.datetimepicker.css">
<script type="text/javascript" src="../js/jquery.datetimepicker.full.min.js"></script>

<div class="main-right">
    <div class="main-header">
        <h5 class="col-sm-11">发送记录</h5>
    </div>
    
    <form class="form-horizontal">
      <div class="form-group">
          <label for="" class="col-sm-2 control-label">推送时间：</label>
          <div class="col-sm-3">
              <input type="text" class="form-control" id="sendTimePicker" value="">
          </div>
      </div>
    </form>

    <div class="">
        <table class="table table-bordered  table-com-center">
          <thead>
            <tr>
              <th width="5%">序号</th>
              <th width="10%">消息标题</th>
              <th width="25%">内容</th>
              <th width="8%">设备类型</th>
              <th width="8%">发送方式</th>
              <th width="14%">发送时间</th>
              <th width="15%">覆盖用户</th>
              <th width="5%">状态</th>
              <th width="10%">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>到家美食会</td>
              <td>您收到一张到家优惠券，请您及时使用以免过期</td>
              <td>iOS</td>
              <td>推送</td>
              <td>2014年7月8日 12:00</td>
              <td>876 <br> （875<font color="green">成功</font>，1<font color="red">失败</font>）</td>
              <td>完成</td>
              <td>
                    <a href="edit.php" class="btn btn-primary btn-sm">编辑</a>
                    <a href="#" class="btn btn-danger btn-sm">删除</a>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>到家美食会</td>
              <td>您收到一张到家优惠券，请您及时使用以免过期</td>
              <td>iOS</td>
              <td>推送</td>
              <td>2014年7月8日 12:00</td>
              <td>876 <br> （875<font color="green">成功</font>，1<font color="red">失败</font>）</td>
              <td>完成</td>
              <td>
                    <a href="edit.php" class="btn btn-primary btn-sm">编辑</a>
                    <a href="#" class="btn btn-danger btn-sm">删除</a>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    
    <div class="pager">
      <ul class="pagination">
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li  class="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>

</div>

<script type="text/javascript">

        var sendTimePicker = '#sendTimePicker';

         $(function(){
                $(sendTimePicker).datetimepicker({
                    lang:"ch",           //语言选择中文
                    format:"Y-m-d",      //格式化日期
                    step : 5,
                    defaultDate : new Date()
                });
         })

          


      </script>

<?php require_once('../include/footer.php'); ?>