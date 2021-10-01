(function ($) {
	"use strict";

// data - background
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
});

$("[data-bg-color]").each(function () {
	$(this).css("background", $(this).attr("data-bg-color"))
});

// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow: "<i class='common-arrow common-arrow--prev slider--arrow slider--prev fal fa-long-arrow-left'></i>",
		nextArrow: "<i class='common-arrow common-arrow--next slider--arrow slider--next fal fa-long-arrow-right'></i>",
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();

/* Search
	-------------------------------------------------------*/
var $searchWrap = $('.search-wrap');
var $navSearch = $('.nav-search');
var $searchClose = $('#search-close');

$('.search-trigger').on('click', function (e) {
	e.preventDefault();
	$searchWrap.animate({
		opacity: 'toggle'
	}, 500);
	$navSearch.add($searchClose).addClass("open");
});

$('.search-close').on('click', function (e) {
	e.preventDefault();
	$searchWrap.animate({
		opacity: 'toggle'
	}, 500);
	$navSearch.add($searchClose).removeClass("open");
});

function closeSearch() {
	$searchWrap.fadeOut(200);
	$navSearch.add($searchClose).removeClass("open");
}

$(document.body).on('click', function (e) {
	closeSearch();
});

$(".search-trigger, .main-search-input").on('click', function (e) {
	e.stopPropagation();
});

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

// owlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// Header Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

//Click event to scroll to top
$('.scroll-top').on('click', function () {
	$('html, body').animate({
		scrollTop: 0
	}, 2000);
	return false;
});

// WOW active
new WOW().init();

// Counter
$('.counter').counterUp();

// offcanvas menu
$(".menu-tigger").on("click", function () {
	$("#menu-overlay,.offcanvas-overly").addClass("active");
	return false;
});
$(".primary-nav li a,.menu-close,.offcanvas-overly").on("click", function () {
	$("#menu-overlay,.offcanvas-overly").removeClass("active");
});

// Project active
$('.project-active').slick({
	speed: 1000,
	autoplay: false,
	autoplaySpeed: false,
	dots: false,
	fade: false,
	arrows: true,
	prevArrow: "<i class='common-arrow common-arrow--prev top--arrow top--arrow--prev fal fa-long-arrow-left'></i>",
	nextArrow: "<i class='common-arrow common-arrow--next top--arrow top--arrow--next fal fa-long-arrow-right'></i>",
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				arrows: false,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				fade: false,
				arrows: false,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});

// Team active
$('.team-active').slick({
	speed: 1000,
	autoplay: false,
	autoplaySpeed: false,
	dots: false,
	fade: false,
	arrows: true,
	prevArrow: "<i class='common-arrow common-arrow--prev top--arrow top--arrow--two top--arrow--prev fal fa-long-arrow-left'></i>",
	nextArrow: "<i class='common-arrow common-arrow--next top--arrow top--arrow--two top--arrow--next fal fa-long-arrow-right'></i>",
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				arrows: false,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				fade: false,
				arrows: false,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});
// Review active H1
$('.review-active').slick({
	speed: 1000,
	autoplay: false,
	autoplaySpeed: false,
	dots: true,
	fade: false,
	arrows: true,
	prevArrow: "<i class='common-arrow common-arrow--prev top--arrow top--arrow--two top--arrow--prev fal fa-long-arrow-left'></i>",
	nextArrow: "<i class='common-arrow common-arrow--next top--arrow top--arrow--two top--arrow--next fal fa-long-arrow-right'></i>",
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 2,
				arrows: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				fade: false,
				arrows: false,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});
// Review active H1
$('.review-active--h2').slick({
	speed: 1000,
	autoplay: false,
	autoplaySpeed: false,
	dots: false,
	fade: false,
	arrows: true,
	prevArrow: "<i class='common-arrow common-arrow--prev slider--arrow slider--prev fal fa-long-arrow-left'></i>",
	nextArrow: "<i class='common-arrow common-arrow--next slider--arrow slider--next fal fa-long-arrow-right'></i>",
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows: false,
				dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				fade: false,
				arrows: false,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});
// Review active H1
$('.review-activeh3').slick({
	speed: 1000,
	autoplay: false,
	autoplaySpeed: false,
	dots: false,
	fade: false,
	arrows: true,
	prevArrow: "<i class='common-arrow common-arrow--prev slider--arrow slider--prev fal fa-long-arrow-left'></i>",
	nextArrow: "<i class='common-arrow common-arrow--next slider--arrow slider--next fal fa-long-arrow-right'></i>",
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows: false,
				dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				fade: false,
				arrows: false,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});

// Sponsor active
$('.sponsor-active').slick({
	speed: 1000,
	autoplay: false,
	autoplaySpeed: false,
	dots: false,
	fade: false,
	arrows: false,
	prevArrow: "<i class='common-arrow common-arrow--prev top--arrow top--arrow--two top--arrow--prev fal fa-long-arrow-left'></i>",
	nextArrow: "<i class='common-arrow common-arrow--next top--arrow top--arrow--two top--arrow--next fal fa-long-arrow-right'></i>",
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: false,
				fade: false,
				arrows: false,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});
	// INITIALIZE DATEPICKER PLUGIN
	$('.datepicker').datepicker({
		clearBtn: true,
		format: "dd/mm/yyyy"
	});

	// niceSelect
	$('#category').niceSelect();

	// paroller
	if ($('.paroller').length) {
		$('.paroller').paroller();
	}
	// ------------------------ Hover Tilt effect
	var tiltBlock = $('.js-tilt');
	if (tiltBlock.length) {
		$('.js-tilt').tilt({
			glare: true,
			maxGlare: 0.4
		});
	}

	// ------------------------------- AOS Animation
	if ($("[data-aos]").length) {
		AOS.init({
			duration: 1000,
			mirror: true
		});
	}
})(jQuery);