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
	  $(this).removeClass('active');
	  $(".fixed_search_block").removeClass('active');
	});

	$( ".search" ).click(function() {
	  $(".fixed_search_close").addClass('active');
	  $(".fixed_search_block").addClass('active');
	  $( ".fixed_search_block input" ).focus();
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
