'use strict';

$(function ()
{      

    $('.video_btn a').magnificPopup({
	  type: 'image'
	  // other options
	});

	$('.sertifikat a').magnificPopup({
	  type: 'image'
	  // other options
	});

	// $('#header-modal').modal('show');
    $('.header_btn a').on('click', function(e){
        e.preventDefault();
        $('#header-modal').modal('show');
    });

    $('.sertifikat .owl-carousel').owlCarousel({
	    loop:true,
	    // margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:5
	        },
	        1000:{
	            items:5
	        }
	    }
	})

    

});
