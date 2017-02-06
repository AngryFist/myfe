<?php require_once('../include/header.php'); ?>

<div class="main-right">
    <div class="main-header">
      <h5 class="col-sm-11">新增模板</h5>
    </div>
    
    

    <form class="form-horizontal">
      <div class="form-group">
          <label for="" class="col-sm-2 control-label">方式：</label>
          <div class="col-sm-10">
              <select name="" id="input" class="form-control" required="required">
                    <option value="">选择模板</option>
                    <option value="">aaa</option>
                    <option value="">bbb</option>
                </select>
          </div>
      </div>
      <div class="form-group">
          <label for="" class="col-sm-2 control-label">模板名：</label>
          <div class="col-sm-10">
              <input type="text" name="templateName" id="templateName" class="form-control" value="" required="required" pattern="" title="" maxlength="20">
          </div>
      </div>
      <div class="form-group">
          <label for="" class="col-sm-2 control-label">标题：</label>
          <div class="col-sm-10">
              <input type="text" name="title" id="title" class="form-control" value="" required="required" pattern="" title="" maxlength="20">
          </div>
      </div>
      <div class="form-group">
            <label for="content" class="col-sm-2 control-label">内容：</label>
            <div class="col-sm-10">
              <textarea class="form-control" id="content" rows="3"  maxlength="60"></textarea>
            </div>
        </div>

        <div class="col-md-offset-2">
          <a href="index.php" class="btn btn-warning">取消</a>
            <button type="button" class="btn btn-success">保存</button>

        </div>
    </form>
    

</div>

 <script type="text/javascript">
    $(function(){
      $('#templateName').maxlength({
            alwaysShow: true,
            placement: 'bottom-right'
          });
      $('#title').maxlength({
            alwaysShow: true,
            placement: 'bottom-right'
          });
    $('#content').maxlength({
            alwaysShow: true,
            placement: 'bottom-right'
          });
    })
  </script>
<?php require_once('../include/footer.php'); ?>