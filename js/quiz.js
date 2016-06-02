$(document).on('ready', function(){
	setTimeout(function() {
	    $('.Intro').fadeOut(function(){
			$('.Question1').fadeIn();	    	
	    });
	}, 3000);

	// setTimeout(function() {
	//     $('.Question1').fadeIn();
	// }, 4000);



	var doorChoice = function(door){
		$('.Question1').hide();

		if(door === 3){
			$('.Good1').fadeIn();
		}
		else{
			$('.Bad1').fadeIn();
		}
	};

	$('.harley-four').on('click', function(){
		doorChoice(3);
	});

	$('.cat-one, .creep-two, .fire-three, .freeze-five').on('click', function(){
		doorChoice(0);
	});
});