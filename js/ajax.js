$(document).on('ready', function(){

var imgSrc;

$.ajax({
  type: 'GET',
  url: 'http://gateway.marvel.com:80/v1/public/characters?name=Thor&apikey=e1221702e8688a9361676710fc552a08'
}).done(function(data){
    handleResponse(data);
} );

marvel.characters.findAll(function(err, results) {
  if (err) {
    return console.error(err);
  }
 
  console.log(results);
});

var handleResponse = function(takeinData) {
	var extension = takeinData.data.results[0].thumbnail.extension;
	$('#mySweetApiImage')[0].src = takeinData.data.results[0].thumbnail.path + '.' + extension;
};

$('#hero-button').on('click', function(){
	var retrieveName = $('#hero-button').val();
});

// function getByName() {
// 	var name = $('#nameField').val();
// 	$.ajax({
//  		type: 'GET',
//   		url: 'http://gateway.marvel.com:80/v1/public/characters?name=' + name + '&apikey=e1221702e8688a9361676710fc552a08'
// 	}).done(function(data){
//     	popImage(data);
// 	} )
// }

// function popImage(data) {

// }


}); // closes document.ready
