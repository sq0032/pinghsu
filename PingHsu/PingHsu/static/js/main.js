$(document).ready(function(){
	$(".main").onepage_scroll({
		sectionContainer: "section",
		responsiveFallback: 600
	});
	
	
	$('.thumbnails img').click(function(){
		var $image = $(event.currentTarget);
		var num = $image.attr('image_num');
		var url = $image.attr('image_url');
		$('#'+num).attr('src',url);
		
	});
	
	$('.back a').click(function(){
		var $anchor = $(event.currentTarget);
		var index = $anchor.attr('data-index');
		$('.main').moveTo(index);
	})
});