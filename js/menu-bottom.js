$(function(){


	/* 控制切换 */
	$(".menu-div").click(function(){
		console.log($(this).data("icon-normal"))
        console.log($(this).data("icon-press"))

		/* 将菜单图标都改为 normal */
		$(".menu-div").each(function(){
			$(this).find("img").attr("src" , $(this).data("icon-normal"));
		})

		/* 再将被点击图标改为 press */
		var iocnPress = $(this).data("icon-press")
		$(this).find("img").attr("src" , iocnPress)



		/* 获取 中间部分的层   切换页面 */

		var target = $(this).data("target")
		$("#wrap-chat , #wrap-add-friend , #wrap-discovery , #wrap-me").each(function(){

			if( $(this)[0].id==target ) {
				$(this).show(200);
			} else {
				$(this).hide();
			}

		})

		/* 如果显示朋友圈时 , 点击了下方4个菜单  ，在 wrap-x 切换之前   要把朋友圈隐藏   */
		$("#moments").hide();


	});

})
