$(function () {
    'use strict';
    /*===========================================================================*/
    /*=   owl slider   =*/
    /*===========================================================================*/

    var slider = $("#slider");

    slider.owlCarousel({
        pagination: false,
        singleItem: true,
        autoPlay: 10000,
        navigation: false,

        afterAction: function (el) {
            //remove class active
            this
                .$owlItems
                .removeClass('active')

            this
                .$owlItems
                .eq(this.currentItem)
                .addClass('active')
        }
    });

    // Custom Navigation Events
    $(".next-owl").click(function () {
        slider.trigger('owl.next');
    });
    $(".prev-owl").click(function () {
        slider.trigger('owl.prev');
    });

    /***********************************************************************************************/
    /* owlCarousel */
    /***********************************************************************************************/
    var owl = $("#say");

    owl.owlCarousel({

        itemsCustom: [
            [0, 1],
            [450, 1],
            [600, 1],
            [700, 1],
            [1000, 1],
            [1200, 1],
            [1400, 1],
            [1600, 1]
        ]

    });
    var owl = $("#group");

    owl.owlCarousel({

        itemsCustom: [
            [0, 1],
            [450, 3],
            [600, 4],
            [700, 4],
            [1000, 5],
            [1200, 5],
            [1400, 6],
            [1600, 6]
        ],
        pagination: false

    });
    /***********************************************************************************************/
    /* parallax */
    /***********************************************************************************************/
    $('#parallax-1').parallax("0%", 0.0);
    $('#parallax-2').parallax("0%", 0.0);
    $('#parallax-3').parallax("0%", 0.0);
    $('#parallax-4').parallax("0%", 0.0);
    $('#footer').parallax("0%", 0.0);

    //data-animation-name="fadeInUp" data-animation-delay="2"
    function animation(item, trigger) {
        item.each(function () {
            var element = $(this),
                animationClass = element.attr('data-animation-name'),
                animationCss = element.attr('data-animation-delay');

            element.css({
                '-webkit-animation-delay': animationCss,
                '-moz-animation-delay': animationCss,
                '-o-animation-duration': animationCss,
                'animation-delay': animationCss
            });

            var trigger = ( trigger ) ? trigger : element;

            trigger.waypoint(function () {
                element.addClass('animated').addClass(animationClass);
            }, {
                triggerOnce: true,
                offset: '90%'
            });
        });
    }

    animation($('.animation'));
    animation($('.trigger-animation'), $('.trigger-animation-container'));


    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-sizer'
        }
    });
// filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    });

    $('.button-group.filter-button-group button').click(function () {

        $('.button-group.filter-button-group button').removeClass('is-checked');
        $(this).addClass('is-checked');

    });

    /*===========================================================================*/
    /*=   sticky navigation   =*/
    /*===========================================================================*/
    var sticky_header2 = $('#header').offset().top;
    var sticky_header = $('#slider').offset().top;
    var sticky_navigation = function () {
        var scroll_top = $(window).scrollTop();

        if (scroll_top > sticky_header2) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }

        if (scroll_top > sticky_header) {
            $('#header').addClass('sticky-header');
        } else {
            $('#header').removeClass('sticky-header');
        }
    };
    sticky_navigation();
    $(window).scroll(function () {
        sticky_navigation();
    });
});
