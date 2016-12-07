$(function () {
    $("li").each(function(index){
	$(this).click(function(){
	    $("li").removeClass("menu-item-active");
	    $("li").eq(index).addClass("menu-item-active");
	});
    });
});


