$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//input
	$( ".search input" ).click(function() {
	  $( this ).addClass('active');
	});

});

$(document).ready(function() {
	if($(".photo_block_about").length) {
		var width = $(window).width();
		if (width < 760) {
			var div=$(".photo_block_about");
			$(".photo_block_about").remove();
			$(".photos_col").children().eq(0).after(div);
			//console.log($(".photos_col").children().eq(0));
			
		}
	}
});
