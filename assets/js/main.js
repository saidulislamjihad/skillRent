// fixed header
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});

// Navbar Toggle Button For Mini Device
$('.nav-toggle-btn').click(function() {
    $('.nav-items-wrapper').toggleClass('menu-visible');
    $('body').toggleClass('body-overflow');
}); 

$(document).ready(function() {
    // Nav submenu Responsive
    if ($(window).width() <= 1024) {
        $('.nav-item-submenu').addClass('collapse');
    } else {
        $('.nav-item-submenu').removeClass('collapse');
    }

    $(window).resize(function() {
        if ($(window).width() <= 1024) {
            $('.nav-item-submenu').addClass('collapse');
        } else {
            $('.nav-item-submenu').removeClass('collapse');
        }
    });

    // Nav submenu collapse Js
    $(window).resize(function() {
        if ($(window).width() <= 1024) {
            $('.item-has-submenu .nav-item-link').on('click', function(e) {
                e.preventDefault();
                $(this).closest('.nav-item').find('.collapse').collapse('toggle');
            });
        }
    });
    if ($(window).width() <= 1024) {
        $('.item-has-submenu .nav-item-link').on('click', function(e) {
            e.preventDefault();
            $(this).closest('.nav-item').find('.collapse').collapse('toggle');
        });
    }

});

//Home slider Js
$('.review-items-wrapper').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: false,    
    autoPlay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoPlayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:2
        },
        1000: {
            items: 3
        }
    }
});

//Got Hired slider Js
$('.got-hired-items-wrapper').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: false,
    autoPlay: true,
    autoPlaySpeed: 1000,
    autoPlayTimeout: 1000,
    autoPlayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:4
        },
        1000: {
            items: 6
        }
    }
});