$(document).on('ready', function(){

// listen for when teh user clicks on teh hamburger icon
$('.hamburger').on('click', function () {
	$('.menu').slideToggle();
	// $('.menu').addClass('open');
//if menu is closed, slide down
// if ($('.menu').hasClass('open')) {
// 	$('.menu').removeClass('open');
// } else {
// 	// if menu is open, slide down
// 	$('.menu').addClass('open');
// }

// $('.menu').toggleClass('open');

});

}); // closes doc.ready