$(document).on('ready', function(){

	// $(window).scrollTo('#page-more', 800);
	//get outHeight of .nav-wrapper and store in variable

	var offset = $('.nav-wrapper').outerHeight(true);
	console.log(offset);

	//add a margin-top to our body
	$('body').css('margin-top', offset);

	$('.nav-main a').on('click', function(event){
		console.log(event);
		event.preventDefault();

		$('.nav-main a').removeClass('color');
		// Scroll to the page associated with THIS link
		console.log(this);

		var pageToScrollTo = $(this).attr('href');
		// console.log(pageToScrollTo);

		// use pageToScrollTo in a .scrollTo function
		$(window).scrollTo(pageToScrollTo, 800, {offset: -offset});

		// $(this).addClass('color');

	});

}); // closes document.ready