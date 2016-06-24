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

	$( ".fixed_search_close" ).click(function() {
	  $(this).hide();
	  $(".fixed_search_block").hide();
	});

	$( ".search" ).click(function() {
	  $(".fixed_search_close").show();
	  $(".fixed_search_block").show();
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
