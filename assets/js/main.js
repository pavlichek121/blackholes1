$(document).ready(function(){
    $('a[href^="#p"]').click(function(){
        
        var otstupTop=200;
        $('body,html').animate({
        
           scrollTop: $($(this).attr('href')).offset().top-otstupTop
        }, 1500);
    });
});

$(document).ready(function(){
    $('a[href^="#g"]').click(function(){
        
        var otstupTop=70;
        $('body,html').animate({
        
           scrollTop: $($(this).attr('href')).offset().top-otstupTop
        }, 1500);
    });
});

$(document).ready(function(){
    $('a[href^="#n"]').click(function(){
        
        var otstupTop=70;
        $('body,html').animate({
        
           scrollTop: $($(this).attr('href')).offset().top-otstupTop
        }, 1500);
    });
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>3100){
			$('.up').fadeIn(500)
		}else{
			$('.up').fadeOut(300)
		}
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>700){
			$('.up_1').fadeIn(500)
		}else{
			$('.up_1').fadeOut(300)
		}
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>3100){
			$('.up').fadeIn(500)
		}else{
			$('.up').fadeOut(300)
		}
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>4600){
			$('.up_3').fadeIn(500)
		}else{
			$('.up_3').fadeOut(300)
		}
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>6600){
			$('.up_4').fadeIn(500)
		}else{
			$('.up_4').fadeOut(300)
		}
	});
});


$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>11900){
			$('.up_5').fadeIn(500)
		}else{
			$('.up_5').fadeOut(300)
		}
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>17100){
			$('.up_6').fadeIn(500)
		}else{
			$('.up_6').fadeOut(300)
		}
	});
});


$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>21600){
			$('.up_7').fadeIn(500)
		}else{
			$('.up_7').fadeOut(300)
		}
	});
});


$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>25000){
			$('.up_8').fadeIn(500)
		}else{
			$('.up_8').fadeOut(300)
		}
	});
});


$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>27800){
			$('.up_9').fadeIn(500)
		}else{
			$('.up_9').fadeOut(300)
		}
	});
});


$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>33100){
			$('.up_10').fadeIn(500)
		}else{
			$('.up_10').fadeOut(300)
		}
	});
});



 $(document).ready(function () {

    $('.panel-heading').click(function () {
      $(this).toggleClass('in').next().slideToggle();
      $('.panel-heading').not(this).removeClass('in').next().slideUp();
        });

    });

$(function(){
	$('#elem, #elem_1, #elem_2, #elem_3, #elem_4, #elem_5, #elem_7, #elem_9, #elem_11, #elem_13, #elem_6, #elem_8, #elem_10, #elem_12, #elem_14, #elem_19, #elem_18, #elem_17, #elem_16, #elem_15, #elem_20').on('click', function(){
  	$(this).toggleClass('transform');
  });
});




