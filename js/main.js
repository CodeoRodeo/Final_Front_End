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

		$(this).addClass('color');

	});

}); // closes document.ready

// $(document).on('ready', function(){

// 	$('.goplay-button').on('click', function(){
// 		GoPlay = setInterval(function(){
// 			doSlides();
// 	 	}, 1000);
// 	});

// 	$('.pause-button').on('click', function(){
// 		clearInterval(GoPlay);

// 	});

// $('img').eq(0).show()

// var currentSlideNum = 0;
// var slideCount = $('img').length;

// var doSlides = function(direction){
// 	// hide current slide
// 	$('img').eq(currentSlideNum).hide();

// 	if(direction === 'next'){
// 		//increase surrentslide by 1;
// 		currentSlideNum = currentSlideNum +1;

// 		//IF currentSlideNum is the last slide
// 		if(currentSlideNum === slideCount -1){
// 			console.log('found the last slide, reset')
// 			currentSlideNum = 0;
// 		}
// 	} else if (direction === 'prev'){
// 		//decrease currentSLide by 1;
// 		currentSlideNum = currentSlideNum -1;
// 		//If currentSlideNum is first slide
// 		if (currentSlideNum <= 0){
// 			// update currentSlideNum to last slide
// 			currentSlideNum = slideCount -1;
// 		}
// 	}

// 	$('img').eq(currentSlideNum).show();

// }

// $('.next-button').on('click', function(){
// 		doSlides('next');

// 	});

// $('.previous-button').on('click', function(){
// 		doSlides('prev');

// 	});

// }); // closes doc.ready
