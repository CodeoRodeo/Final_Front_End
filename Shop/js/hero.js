$(document).ready(function() {
    if(window.innerWidth > 1023){
        $("#pow").animate({
            left: '0px'
         } , 1000 );
        $("#pow2").animate({
            bottom: '0px'
           } , 1000 );
        $("#pow3").animate({
            left: '0px'
   		 } , 1000 );
         $("#kapow").delay(500).animate({
        	fontSize: "40px"
         } , 1000 );
         $("#kapow2").delay(1000).animate({
        	fontSize: "40px"
         } , 1000 );
         $("#kapow3").delay(1500).animate({
        	fontSize: "40px"
         } , 1000 );
     }
	});
