$(document).on('ready', function(){
	//create a function to open modal
	// pass in a state argument (either 'open' or 'close')

	var modal = function(state, contentId, imgSrc){

		if (imgSrc){
			var largeImgSrc = imgSrc.replace('.jpg', '_L.jpg');
			// update img src within the modal
			$('#' + contentId).find('img.large-picks').attr('src', largeImgSrc);
		}
		
		$('#' + contentId).show();

		if(state === 'open' ){
			$('.modal-wrapper').fadeIn('fast',function(){
				$('body').addClass('modal-on');
				// add .modal-on class to body
			});

		} else{
			//fadeOut
			$('.modal-wrapper').fadeOut('fast',function(){
				$('body').removeClass('modal-on');

			});

		}

	}

	$('.js-modal-open').on('click', function(event){
		event.preventDefault();
		var imgSrc = $(this).children('img').attr('src');
		modal('open', 'modal-content-default', imgSrc);
	});

	$('.js-modal-close').on('click', function(){
		modal('close');
	});

}); // closes doc.ready