(function ($) {
	"use strict";
	/* ---------------------------------------------- /*
    // Preloader
    /* ---------------------------------------------- */
    $(window).on('load', function () {
    	$('.loader-bg').delay(1000).fadeToggle();
    });

    /* ---------------------------------------------- /*
    // Preloader
    /* ---------------------------------------------- */
    // $(window).on('load', function () {
    //  $('.loader-bg').delay(1000).addClass("loaded");
    // });

    /* ---------------------------------------------- /*
    // Back To Top
    /* ---------------------------------------------- */
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $("#backtotop_wrapper").addClass("backtotop_show");
        } else {
            $("#backtotop_wrapper").removeClass("backtotop_show");
        }
    });
    $('#backtotop_btn').on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    /* ---------------------------------------------- /*
    // Toggler Button
    /* ---------------------------------------------- */
    $('.navbar_toggler').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        });
        $("body").toggleClass('aside_open');
        $(".bar").toggleClass('closeBtn_active');
        $("body, html").toggleClass('overflow-hidden');
    });

    $('.main_menu a').on( 'click', function () {
        $('body').removeClass('aside_open')
        $(".bar").removeClass('closeBtn_active');
        $("body, html").removeClass('overflow-hidden');
    });

    /* ---------------------------------------------- /*
    // Active Navigation
    /* ---------------------------------------------- */
    // $('.main_menu a').on("click", function () {
    //     if($('.main_menu a').hasClass('active')){
    //         $('.main_menu a').removeClass('active');
    //         $(this).addClass('active');
    //     }
    // });

	/* ---------------------------------------------- /*
    // Typed
    /* ---------------------------------------------- */
    var typed = new Typed("#type", { stringsElement: "#typed_strings", typeSpeed: 75, backSpeed: 75, backDelay: 500, startDelay: 500, loop: !0 });
    var typed = new Typed("#type2", { stringsElement: "#typed_strings2", typeSpeed: 100, backSpeed: 100, backDelay: 500, startDelay: 1000, loop: !0 });
    
	/* ---------------------------------------------- /*
    // WOW
    /* ---------------------------------------------- */
    AOS.init();

    // portfolio project title
    jQuery('.portfolio_wrapper').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.portfolio_title').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.portfolio_title').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.portfolio_title').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.portfolio_title').removeClass('visible');
		});
	});

    var mixer = mixitup('.mixitup_wrapper');

    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 10000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(window.jQuery);

$(function() {
    // Activate progress animation on scroll
    $(window).scroll(function() {
        $('div#progress_area').each(function(index, value) {
            // If progressbar-area is approximately 25% vertically into the window when scrolling from the top or the bottom
            if (
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
                ) {
                // Get percentage of progress
            percent = $(value).data('percentage');
                // Transition progress for 1.25 seconds
                $(this).find($('div#progress')).animate({
                    'width': ((100 * percent) / 100) + "%"
                }, 1500);
            }
        });
    }).trigger('scroll');


});