<?php require_once('../include/header.php'); ?>

<div class="main-right">
    <div class="main-header">
      <h5 class="col-sm-11">新增模板</h5>
    </div>
    
    

    <form class="form-horizontal">
      <div class="form-group">
          <label for="" class="col-sm-2 control-label">方式：</label>
          <div class="col-sm-10">
              <label for="" class="control-label">推送</label>
          </div>
      </div>
      <div class="form-group">
          <label for="" class="col-sm-2 control-label">模板名：</label>
          <div class="col-sm-10">
              <input type="text" name="" id="input" class="form-control" value="" required="required" pattern="" title="" maxlength="20">
          </div>
      </div>
      <div class="form-group">
          <label for="" class="col-sm-2 control-label">标题：</label>
          <div class="col-sm-10">
              <input type="text" name="" id="input" class="form-control" value="" required="required" pattern="" title="">
          </div>
      </div>
      <div class="form-group">
            <label for="content" class="col-sm-2 control-label">内容：</label>
            <div class="col-sm-10">
              <textarea class="form-control" id="content" rows="3"></textarea>
            </div>
        </div>

        <div class="col-md-offset-2">
          <a href="index.php" class="btn btn-warning">取消</a>
            <button type="button" class="btn btn-success">保存</button>

        </div>
    </form>
    

</div>


<?php require_once('../include/footer.php'); ?>