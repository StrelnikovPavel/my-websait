//<IBG>=========================================================================================================================
// function ibg() {

// 	let ibg = document.querySelectorAll(".ibg");
// 	for (var i = 0; i < ibg.length; i++) {
// 		if (ibg[i].querySelector('img')) {
// 			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
// 		}
// 	}
// }

// ibg();


function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();

//</IBG>=========================================================================================================================

$(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu,  .menu__body').toggleClass('active');
	});
	$('.search__btn').click(function (event) {
		$('.header__logo, .icon-menu, .search__txt, .search').toggleClass('_active');
	});
});

/*$(function () {
	$('.menu__brg').click(function (event) {
		$('.menu__brg, .bottom-header_content').toggleClass('active');
	});
});*/

/*
document.querySelectorAll(".tabs__item").forEach((item) =>
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '')

		document.querySelectorAll('.tabs__item').forEach(
			(child) => child.classList.remove('.tabs__item-active')
		);
		document.querySelectorAll('.tabs__block').forEach(
			(child) => child.classList.remove('.tabs__block-active')
		);

		item.classList.add('.tabs__item');
		document.getElementById(id).classList.add('tabs__block');
	})
);*/


// $(document).ready(function () {
// 	$('.tabs__item').click(function (e) {
// 		e.preventDefault();

// 		$('.tabs__item').removeClass('tabs__item-active');
// 		$('.tabs__block').removeClass('tabs__block-active');

// 		$(this).addClass('tabs__item-active');
// 		$($(this).attr('href')).addClass('tabs__block-active');
// 	});
// 	$('.tabs__item:first').click();
// });



//<SWIPER>=========================================================================================================================
var swiper = new Swiper('.swiper-container', {
	//sliderPerView: 3,
	pagination: {
		//el: '.swiper-pagination',
		type: 'fraction',
	},
	loop: true,
	navigation: {
		nextEl: '.control__next',
		prevEl: '.control__prev',
	},
});

// var swiper = new Swiper('.slider-product__body', {
// 	slidesPerView: 1,
// 	spaceBetween: 30,
// 	//slidesPerGroup: 3,
// 	//loop: true,
// 	//loopFillGroupWithBlank: true,
// 	pagination: {
// 		type: 'fraction',
// 	},
// 	navigation: {
// 		nextEl: '.control-next',
// 		prevEl: '.control-prev',
// 	},
// });


//</SWIPER>=========================================================================================================================


//<TIMER>=========================================================================================================================
function countdown(dateEnd) {
	var timer, hours, minutes, seconds;

	dateEnd = new Date(dateEnd);
	dateEnd = dateEnd.getTime();

	if (isNaN(dateEnd)) {
		return;
	}

	timer = setInterval(calculate, 1000);

	function calculate() {
		var dateStart = new Date();
		var dateStart = new Date(dateStart.getUTCFullYear(),
			dateStart.getUTCMonth(),
			dateStart.getUTCDate(),
			dateStart.getUTCHours(),
			dateStart.getUTCMinutes(),
			dateStart.getUTCSeconds());
		var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000);

		if (timeRemaining >= 0) {
			days = parseInt(timeRemaining / 86400);
			timeRemaining = (timeRemaining % 86400);
			hours = parseInt(timeRemaining / 3600);
			timeRemaining = (timeRemaining % 3600);
			days = parseInt(timeRemaining / 60);
			timeRemaining = (timeRemaining % 60);
			seconds = parseInt(timeRemaining);

			document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
			document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
			document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
		} else {
			return;
		}
	}

	function display(hours, minutes, seconds) { }
}

countdown('09/22/2020 02:00:00 AM');
//</TIMER>=========================================================================================================================


//<SLICK>=========================================================================================================================
$(document).ready(function () {
	$('.slider-product__slide').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 3,
		//slidesToScroll:3,
		speed: 500,
		infinite: true,
		initialSlide: 0,//start slider
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		//touchThreshld: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: false,
		variableWidth: false,
		//rows: 1,
		//slidesPerRow: 0,
		//vertical: false,
		//verticalSwiping: false,
		fade: false,
		responsive: [
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					dots: true,
				}
			},
		],
		//mobileFirst: true,
		//appendArrows: $(''),
		//appendDots: $(''),
	});
	$('.slider-featured__slide').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 500,
		infinite: false,
		initialSlide: 0,//start slider
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		//touchThreshld: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: false,
		variableWidth: false,
		//rows: 1,
		//slidesPerRow: 0,
		//vertical: false,
		//verticalSwiping: false,
		fade: false,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
				}
			},
		],
		//mobileFirst: true,
		appendArrows: $('.slider-featured__control'),
		//appendDots: $(''),
	});

	$('.slider-blogs__body').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 300,
		infinite: false,
		initialSlide: 0,//start slider
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		//touchThreshld: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: false,
		variableWidth: false,
		//rows: 1,
		//slidesPerRow: 0,
		//vertical: false,
		//verticalSwiping: false,
		fade: false,
		responsive: [
			{
				breakpoint: 715,
				settings: {
					slidesToShow: 1,
				}
			},
		],
		//mobileFirst: true,
		appendArrows: $('.slider-blogs__control'),
		//appendDots: $(''),
	});
})

//<SLICK>=========================================================================================================================

//