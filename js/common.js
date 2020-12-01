$(document).ready(function () {
	https: //clck.ru/F5MdE
		$('.mobile_but').click(function () {
			$('.header_menu').slideToggle(350, function () {
				if ($(this).css('display') === 'none') {
					$(this).removeAttr('style');
				}
			});
		})
});




$(function () {

	var btnUp = $(".but_up");

	var top = $(this).scrollTop();
	if (top > 300) {
		btnUp.fadeIn(500);
	} else {
		btnUp.fadeOut(500);
	}


	$(document).on("scroll", function () {
		var top = $(this).scrollTop();
		if (top > 300) {
			btnUp.fadeIn(500);
		} else {
			btnUp.fadeOut(500);
		}
	});

	btnUp.on("click", function () {
		$("html,body").animate({
			scrollTop: 0
		}, 400);
	});
});


$(".link").on("click", function (e) {
	e.preventDefault();

	var selector = $(this).attr("href"); //получили Атрибут
	var h = $(selector); //получили элемент с данным атрибутом


	$("html,body").animate({
		scrollTop: h.offset().top //мы скролим тег body на высоту h.offset(высоту получаем при клике на элемент меню).top
	}, 500);
});


$(document).ready(function () {
	new WOW().init();
});


$(".fa-bars-click").on('click', function () {
	$('.fa-times-mod').css('display', 'block');
	$(".fa-bars-click").css('display', 'none');
	$('header .header_content h1').css('display', 'none');
	$('header .header_content h4').css('display', 'none');
});

$(".fa-times-mod").on('click', function () {
	$('.fa-times-mod').css('display', 'none');
	$(".fa-bars-click").css('display', 'block');
	$('header .header_content h1').css('display', 'block');
	$('header .header_content h4').css('display', 'block');
});


$('.review_slider').slick({
	centerMode: true,
	centerPadding: '20px',
	slidesToShow: 3,
	dots: true,
	infinite: true,

	responsive: [
		
		{
			breakpoint: 1280,
			settings: {
				arrows: false,
				centerMode: true,
				slidesToShow: 3
			}
		},
		{
			breakpoint: 1100,
			settings: {
				arrows: false,
				centerMode: true,
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				slidesToShow: 1
			}
		},
		
	]
});



// Мой код

window.onresize = function(event) {
	if(window.innerWidth <= 768) {
	  $('.order_mod').addClass("order-2");
	}
  };