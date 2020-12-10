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
	$('.header_neyra_market_btn').css('display', 'none');
});

$(".fa-times-mod").on('click', function () {
	$('.fa-times-mod').css('display', 'none');
	$(".fa-bars-click").css('display', 'block');
	$('header .header_content h1').css('display', 'block');
	$('header .header_content h4').css('display', 'block');
	$('.header_neyra_market_btn').css('display', 'block');
});


$('.review_slider').slick({
	centerMode: true,
	centerPadding: '20px',
	slidesToShow: 3,
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 2000,

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

window.onresize = function (event) {
	if (window.innerWidth <= 768) {
		$('.order_mod').addClass("order-2");
	}
};


$('.block_5_btn').on('click', function () {
	$('.block_5_up').slideToggle();
});

$('.fa-angle-double-down').on('click', function () {
	$('.fa-angle-double-down').css('display', 'none');
	$('.fa-angle-double-up').css('display', 'block');
});

$('.fa-angle-double-up').on('click', function () {
	$('.fa-angle-double-up').css('display', 'none');
	$('.fa-angle-double-down').css('display', 'block');
});


$('.block_7_content').slick({
	lazyLoad: 'ondemand',
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,


	responsive: [

		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
		},

		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},

		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		},


	]
});




$('.block_8_content').slick({
	centerMode: true,
	centerPadding: '0px',
	slidesToShow: 3,
	dots: true,
	responsive: [{
			breakpoint: 992,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 2
			}
		},

		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		},

	]
});











// Cursor

document.addEventListener('DOMContentLoaded', () => {



	const body = document.querySelector('body')

	// After update OptimizedHTML5
	let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree

	cx = window.innerWidth / 2
	cy = window.innerHeight / 2

	body.addEventListener('mousemove', e => {

		clientX = e.pageX
		clientY = e.pageY

		request = requestAnimationFrame(updateMe)

		mouseCoords(e)
		cursor.classList.remove('hidden')
		follower.classList.remove('hidden')

	})

	function updateMe() {

		dx = clientX - cx
		dy = clientY - cy
		tiltx = dy / cy
		tilty = dx / cx
		radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
		degree = radius * 14
		gsap.to('.header_home h1, .header_home h4', 1, {
			transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )`
		})

	}

	gsap.to('h1', { zoom: .98 })



	const cursor = document.getElementById('cursor'),
		follower = document.getElementById('aura'),
		links = document.getElementsByTagName('a')

	mouseX = 0, mouseY = 0, posX = 0, posY = 0

	function mouseCoords(e) {

		mouseX = e.pageX
		mouseY = e.pageY

	}

	gsap.to({}, .01, {

		repeat: -1,

		onRepeat: () => {

			posX += (mouseX - posX) / 5
			posY += (mouseY - posY) / 5

			gsap.set(cursor, {
				css: {
					left: mouseX,
					top: mouseY
				}
			})

			gsap.set(follower, {
				css: {
					left: posX - 24,
					top: posY - 24
				}
			})

		}

	})

	for (let i = 0; i < links.length; i++) {

		links[i].addEventListener('mouseover', () => {
			cursor.classList.add('active')
			follower.classList.add('active')
		})

		links[i].addEventListener('mouseout', () => {
			cursor.classList.remove('active')
			follower.classList.remove('active')
		})

	}

	body.addEventListener('mouseout', () => {
		cursor.classList.add('hidden')
		follower.classList.add('hidden')
	})

})

// gsap.to('.but_up', 2,  {
// 	bottom:"100px",
// 	repeat:-1, 
// 	yoyo:true,
// 	ease: "circ.out"

// });



$('.partner_biznes_questsion_block').on('click', function () {
	$(this).children('.partner_biznes_questsion_block_answer').slideToggle('normal');
	$(this).find('.fa-angle-down').toggleClass('dn');
	$(this).find('.fa-angle-up').toggleClass('db');
	// $('.fa-angle-down').toggleClass('dn');
	// $('.fa-angle-up').toggleClass('db');
	$(this).toggleClass('dark_blue');
});






