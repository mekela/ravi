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