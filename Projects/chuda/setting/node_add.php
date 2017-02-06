<?php require_once('../include/header.php'); ?>

<div class="main-right">
    <div class="main-header">
      <h5 class="col-sm-11">新增模板</h5>
    </div>
    
    

    <form class="form-horizontal">
      <div class="form-group">
          <label for="" class="col-sm-2 control-label">触达方式：</label>
          <div class="col-sm-10 col-md-3">
              <select name="" id="input" class="form-control" required="required">
                    <option value="">选择模板</option>
                    <option value="">aaa</option>
                    <option value="">bbb</option>
                </select>
          </div>
      </div>
      <div class="form-group">
          <label for="" class="col-sm-2 control-label">节点：</label>
          <div class="col-sm-10 col-md-3">
              <select name="" id="input" class="form-control" required="required">
                    <option value="">已接单</option>
                    <option value="">aaa</option>
                    <option value="">bbb</option>
                </select>
          </div>
      </div>
      <div class="form-group">
          <label for="" class="col-sm-2 control-label">类型：</label>
          <div class="col-sm-10 col-md-3">
              <select name="" id="input" class="form-control" required="required">
                    <option value="">订单信息</option>
                    <option value="">aaa</option>
                    <option value="">bbb</option>
                </select>
          </div>
      </div>
      <div class="form-group">
            <label for="content" class="col-sm-2 control-label">平台：</label>
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
          <label for="" class="col-sm-2 control-label">模板：</label>
          <div class="col-sm-10 col-md-3">
              <select name="" id="input" class="form-control" required="required">
                    <option value="">选择模板</option>
                    <option value="">aaa</option>
                    <option value="">bbb</option>
                </select>
          </div>
      </div>
        <div class="col-md-offset-2">
          <a href="node_config.php" class="btn btn-warning">取消</a>
            <button type="button" class="btn btn-success">保存</button>

        </div>
    </form>
    

</div>
<?php require_once('../include/footer.php'); ?>