$( document ).ready(function() {

    $('#home-banner').slick({
    	dots: true,
    	arrows:false,
		speed: 300,
		slidesToShow: 1,
		prevArrow: false,
    	nextArrow: false
    });

    $( ".main-section a.close" ).click(function() {
	  $(".main-section .container").hide();
	});	
     	
	    
});



