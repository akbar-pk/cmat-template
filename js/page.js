$(document).ready(function() {

    //gallery
    $(".gallery-component .gallery-carousel:not(.slick-initialized)").slick({
        slidesToScroll: 1,
        infinite: !0,
        centerMode: !0,
        variableWidth: !0,
        adaptiveHeight: false
    });

    // page scroll

    $(document).on('click', '.navbar-nav a', function() {
        var thisHref = $(this).attr('href').replace( "/", "" );
        console.log(thisHref);
        $('html, body').animate({
            scrollTop: $(thisHref).offset().top
        }, 2000);
    });

});