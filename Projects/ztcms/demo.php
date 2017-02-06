<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>Page Title</title>
	<link rel="stylesheet" href="http://static.daojia.com.cn/dj-lib/css/web/reset.min.css" media="screen" title="no title">
	<link rel="stylesheet" href="css/main.css" media="screen" title="no title">
	<script type="text/javascript" src="//static.daojia.com.cn/jquery/1.12.3/jquery.min.js"></script>
</head>
<body>
	<div class="main_content">
		<div class="page_content">


			<div class="add_icon J-add_icon">+</div>
		</div>
	</div>

	<div class="J-save_cache_content none"></div>

	<div class="pagesave_btn">保存</div>
	<div class="popup_cover"></div>
	<div class="popup tools_content">
		<div class="widget widget-demo J-widget" data-restlist="1,2,3,4,5"></div>
	</div>
</body>
<script type="text/javascript">
	$(function(){
		$('.J-widget').dblclick(function(event) {
			$('.J-add_icon').before($(this).html());
			$('.popup_cover, .popup').hide();
		});


		$('.pagesave_btn').click(function(){
			$('.J-save_cache_content').html($('.page_content'));
			$('.J-save_cache_content').find('.J-add_icon').remove();
			var page_html = $('.J-save_cache_content').html();
			page_html = page_html.replace(/\>\n*\r*\</g, '><');
			$.ajax({
				url :　'demo.php',
				type : 'POST',
				data : {html : page_html},
				success : function(){

				}
			})
		})


	})
</script>
</html>
