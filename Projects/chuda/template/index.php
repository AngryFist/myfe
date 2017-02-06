<?php require_once('../include/header.php'); ?>

<div class="main-right">
    <div class="main-header">
        <h5 class="col-sm-11 fleft">模板模块</h5>
        <a href="add.php" class="btn btn-info col-sm-1 fright">新增</a>
        
    </div>
    
    

    <div class="">
        <table class="table table-bordered  table-com-center">
          <thead>
            <tr>
              <th width="5%">编号</th>
              <th width="10%">模板名</th>
              <th width="10%">模板标题</th>
              <th width="45%">内容</th>
              <th width="8%">触达方式</th>
              <th width="22%">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>订单已分配</td>
              <td>到家美食会</td>
              <td>到家美食会】您的订单(" . $deliveryCost . "元)已确认,已安排餐厅（. $restaurant['fields'][0]['Name']）为您制作美食</td>
              <td>推送</td>
              <td>
                    <a href="edit.php" class="btn btn-primary btn-sm">编辑</a>
                    <a href="#" class="btn btn-danger btn-sm">删除</a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>订单已接单</td>
              <td>到家美食会</td>
              <td>到家美食会】您的订单(" . $deliveryCost . "元)已确认,已安排餐厅（. $restaurant['fields'][0]['Name']）为您制作美食</td>
              <td>推送</td>
              <td>
                    <a href="edit.php" class="btn btn-primary btn-sm">编辑</a>
                    <a href="#" class="btn btn-danger btn-sm">删除</a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>订单已送达</td>
              <td>到家美食会</td>
              <td>到家美食会】您的订单(" . $deliveryCost . "元)已确认,已安排餐厅（. $restaurant['fields'][0]['Name']）为您制作美食</td>
              <td>推送</td>
              <td>
                    <a href="edit.php" class="btn btn-primary btn-sm">编辑</a>
                    <a href="#" class="btn btn-danger btn-sm">删除</a>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    

</div>


<?php require_once('../include/footer.php'); ?>