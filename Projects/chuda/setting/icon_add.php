<?php require_once('../include/header.php'); ?>

<div class="main-right">
    <div class="main-header">
      <h5 class="col-sm-11">新增icon</h5>
    </div>
    
    

    <form class="form-horizontal">
      <div class="form-group">
          <label for="" class="col-sm-2 control-label">类型：</label>
          <div class="col-sm-10 col-md-3">
              <select name="" id="input" class="form-control" required="required">
                    <option value="">推送消息</option>
                    <option value="">aaa</option>
                    <option value="">bbb</option>
                </select>
          </div>
      </div>

      <div class="form-group">
          <label for="" class="col-sm-2 control-label">上传图片：</label>
          <div class="col-sm-10 col-md-3">
              <input type="file">
          </div>
      </div>

      </div>
        <div class="col-md-offset-4">
          <a href="icon_config.php" class="btn btn-warning">取消</a>
            <button type="button" class="btn btn-success">保存</button>

        </div>
    </form>
    

</div>
<?php require_once('../include/footer.php'); ?>