$(document).on('ready', function(){
	setTimeout(function() {
	    $('.Intro').fadeOut();
	}, 3000);

	setTimeout(function() {
	    $('.Question1').fadeIn();
	}, 4000);



	var doorChoice = function(door){
		$('.Question1').hide();

		if(door === 3){
			$('.Good1').fadeIn();
		}
		else{
			$('.Bad1').fadeIn();
		}
	};

	$('.creep-two').on('click', function(){
		doorChoice(3);
	});

	$('.cat-one, .fire-three, .harley-four, .freeze-five').on('click', function(){
		doorChoice(0);
	});
});