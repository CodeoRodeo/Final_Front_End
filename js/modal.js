$(document).on('ready', function(){
	//create a function to open modal
	// pass in a state argument (either 'open' or 'close')

	var modal = function(state, contentId){
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

	$('.js-modal-open').on('click', function(){

		modal('open', 'modal-content-default');
	});

	$('.js-modal-close').on('click', function(){
		modal('close');
	});

}); // closes doc.ready