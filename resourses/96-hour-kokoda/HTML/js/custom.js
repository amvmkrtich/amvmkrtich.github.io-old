jQuery(function ($){
    $(".menu-toggle").click(function (e){
        e.preventDefault();
        $("body").toggleClass("mobile-menu-open");
        let svg = $(this).find("use");
        let svgHref = svg.attr("xlink:href");
        let iconName = svgHref.includes("#menu") ? svgHref.replace("#menu", "#close") : svgHref.replace("#close", "#menu");

        svg.attr("xlink:href", iconName);
    });

    // sliders
    if(typeof $.fn.slick === "function"){
        $(".js-imgs-three-slider").slick({
            slidesToShow: 3,
            arrows: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '25%',
                        autoplay: true
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '15px',
                        autoplay: true
                    }
                }
            ]
        });
    }
});
