/*===========================================================================*/
/*=   CUSTOM PARALLAX   =*/
/*===========================================================================*/
var pContainerHeight = $('#slider-owl').height();

$(window).scroll(function (){

    var wScroll = $(this).scrollTop();

    if (wScroll >= pContainerHeight) {

        $('[data-parallax="parallax-slider"]').css({

            'transform': 'translate(0px, ' + wScroll / 20 + '%)'

        });

    }
});


