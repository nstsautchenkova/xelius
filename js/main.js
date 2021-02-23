//load
$(window).on('load', function () {
	$('#preloader').delay(700).fadeToggle(500);
	
	$('.screen-section .p-tit').attr('data-aos', 'fade-up');
	$('.screen-section h2').attr('data-aos', 'fade-up');
	$('.screen-section .a-link').attr('data-aos', 'fade-up');
	
	$('.first-screen .p-tit').attr('data-aos', 'fade-up');
	$('.first-screen h2').attr('data-aos', 'fade-up');
	$('.external-systems__page .img-rocket').attr('data-aos', 'fade-up-right');
	
});
$(window).on('load', function () {
	function anims() {
	  $('.start-anim').addClass('anim');
	}
	setTimeout(anims, 1000);
});

$(window).on('load', function () {
	function anim1() {
		$('.screen-section .p-tit').addClass('aos-animate');
		$('.first-screen .p-tit').addClass('aos-animate');
	}
	setTimeout(anim1, 1200);
});
$(window).on('load', function () {
	function anim2() {
		$('.screen-section h2').addClass('aos-animate');
		$('.first-screen .screen-section h2').addClass('aos-animate');
	}
	setTimeout(anim2, 1400);
});
$(window).on('load', function () {
	function anim3() {
		$('.screen-section .a-link').addClass('aos-animate');
		$('.external-systems__page .img-rocket').addClass('aos-animate');
	}
	setTimeout(anim3, 1600);
});

AOS.init({
	easing: 'ease-out-back',
	duration: 1000,
	disable: function () {
    var maxWidth = 1100;
    return window.innerWidth < maxWidth;
  }
});


$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
	
	$('.animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
	
});

//parallax
(function() {
  window.addEventListener('scroll', function(event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d, depthleft;
    topDistance = this.pageYOffset;
    
	layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
	  movement = (topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
	  
	  
    }
	//layers 2
	layerstop = document.querySelectorAll("[data-type='parallaxtop']");
    for (i = 0, len = layerstop.length; i < len; i++) {
      layertop = layerstop[i];
      depthtop = layertop.getAttribute('data-depth');
	  movementtop = -(topDistance * depthtop);
      translate3dtop = 'translate3d(0, ' + movementtop + 'px, 0)';
      layertop.style['-webkit-transform'] = translate3dtop;
      layertop.style['-moz-transform'] = translate3dtop;
      layertop.style['-ms-transform'] = translate3dtop;
      layertop.style['-o-transform'] = translate3dtop;
      layertop.style.transform = translate3dtop;
    }
	
	
  });

}).call(this);



//	accordion
$('.accordion__header').on('click', function(e) {
    e.preventDefault();
    if($(this).closest('.accordion').hasClass('active')) {
        $('.accordion').removeClass('active');
    } else {
        $('.accordion').removeClass('active');
        $(this).closest('.accordion').addClass('active');
    }
    var $content = $(this).next();
    $content.slideToggle(500);
    $('.accordion__panel').not($content).slideUp('fast');
});


// Menu
$(document).on("ready", function () {
    $(".menu .trigger-menu").click(function () {
        $(this).toggleClass('op');
		$(".menu").toggleClass("menu-open");
		$('.menu .hamburger-menu__bar').toggleClass('animate');
    });
});

// adaptive
$(document).on("ready", function () {
	if( window.innerWidth <= 1300 ){

		// slider
		$(".statistics-slider").addClass('swiper-container');
		$(".statistics-row").addClass('swiper-wrapper');
		$(".statistics-slider .swiper-wrapper").removeClass('statistics-row');
		$(".statistics-item").addClass('swiper-slide');
		

		var ps_swiper = new Swiper(".statistics-slider", {
			slidesPerView: 1,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			
		});
		
		
		
		window.addEventListener("orientationchange", function() {
			tariff_swiper.update();
			ps_swiper.update();
		}, false);
  
	} 
		
	
});
