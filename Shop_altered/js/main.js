$(document).on('ready', function(){

var imgSrc;

$.ajax({
  type: 'GET',
  url: 'http://gateway.marvel.com:80/v1/public/characters?name=Thor&apikey=e1221702e8688a9361676710fc552a08'
}).done(function(data){
    handleResponse(data);
} )
var handleResponse = function(takeinData) {
	debugger;
	$('#mySweetApiImage').src = takeinData.results[0].thumbnail.path;
	imgSrc = takeinData.results[0].thumbnail.path;
	console.log(imgSrc)
};


}); // closes document.ready