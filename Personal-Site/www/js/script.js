$(document).ready(function () {
    "use strict";


    // Touch screen functionality
    function isMobile() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }
    let windowWidth = document.querySelector('html').clientWidth
    if (windowWidth < 700) {
        // get YouTube video in the DOM and set to open YouTube in a new tab
        const video = document.querySelector('.box-video a')
        video.setAttribute('href', 'https://www.youtube.com/watch?v=Ss3mCmL6klI&list=PLrev1ridNn9FFcYvmvB9e3kgJc6T_hexX')
        video.setAttribute('target', '_blank')
        // let the user know about the function of the video
        const redirectNode = document.createElement('div')
        const redirectText = document.createTextNode('Opens YouTube in a new tab')
        redirectNode.appendChild(redirectText);
        document.querySelector('.box-video .project-info').appendChild(redirectNode);

    }
    if (isMobile()) {
        // make overlays on performance credits shown by default
        let style = document.createElement('style');
        style.innerHTML = `.box-gallery .project-info, .box-gallery .project-icon {
            opacity: 1 !important;
        }`
        // Get the first script tag
        let ref = document.querySelector('script');
        // Insert our new styles before the first script tag
        ref.parentNode.insertBefore(style, ref);
    }

    // /* =================================
    // LOADER 
    // =================================== */
    // $(".loader").delay(400).fadeOut();
    // $(".animationload").delay(400).fadeOut("fast");

    // var bgi = $("[data-background]");
    // bgi.length > 0 &&
    //     bgi.each(function () {
    //         var e = $(this),
    //             t = e.attr("data-background");
    //         e.css({
    //             "background-image": "url(" + t + ")"
    //         });
    //     });

    // var progressBar = $(".progress-bar");
    // progressBar.length > 0 &&
    //     progressBar.each(function () {
    //         var e = $(this),
    //             t = e.attr("aria-valuenow");
    //         e.css({
    //             width: t + "%"
    //         });
    //     });

    /* =================================
	SCROLL TO
	=================================== */
    $('a[href^="#"]').on("click", function (event) {
        var target = $(this.getAttribute("href"));

        if (target.length) {
            event.preventDefault();
            $("html, body").stop().animate({
                    scrollTop: target.offset().top,
                },
                1000
            );
        }
    });

    /* =================================
	NAVBAR 
	=================================== */
    var top = jQuery(document).scrollTop();
    var batas = 200;
    var navbar = jQuery(".navbar-main");
    var navbarnav = jQuery(".navbar-nav");
    var header = jQuery(".header");

    if (top > batas) {
        navbar.addClass("stiky");
        navbarnav.addClass("ml-auto");
    }
    jQuery(window).scroll(function () {
        top = jQuery(document).scrollTop();

        if (top > batas) {
            navbar.addClass("stiky");
        } else {
            navbar.removeClass("stiky");
            if (header.hasClass("header-2")) {
                navbarnav.removeClass("ml-auto");
            }
            if (header.hasClass("header-5")) {
                navbarnav.removeClass("ml-auto");
            }
        }
    });

    /* =================================
	BANNER ROTATOR IMAGE 
    =================================== */
    let extension;
    if (Modernizr.webp) {
        extension = undefined
    } else {
        extension = undefined
    }

    window.addEventListener('load', (event) => {
        console.log("LOADED")
        var slides = $(".full-screen"),
            b = slides.find(".item");
        b.each(function () {
            var e = $(this),
                ocImg = e.find("img").prop("currentSrc");
            let filenameArrFile = ocImg.split('/')
            let filenameFull = filenameArrFile[filenameArrFile.length - 1]
            let filenameArr = filenameFull.split('.')
            let filename;
            if (extension) {

                filename = "images/" + filenameArr[0] + "." + extension
            } else {
                filename = "images/" + filenameArr[0] + "." + filenameArr[1]
            }
            ocImg =
                e.css({
                    "background-image": "url(" + filename + ")"
                });
        });

        slides.owlCarousel({
            // stagePadding: 50,
            loop: true,
            // margin: 10,
            autoplay: true,
            autoplayTimeout: 7000,
            nav: true,
            dots: false,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            ],
            navContainer: ".banner .custom-nav",
            items: 1,
        });
    })




    /* =================================
	BACK TO TOP 
	=================================== */
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $(".cd-top");

    //hide or show the "back to top" link
    $(window).scroll(function () {
        $(this).scrollTop() > offset ?
            $back_to_top.addClass("cd-is-visible") :
            $back_to_top.removeClass("cd-is-visible cd-fade-out");
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass("cd-fade-out");
        }
    });

    //smooth scroll to top
    $back_to_top.on("click", function (event) {
        event.preventDefault();
        $("body,html").animate({
                scrollTop: 0,
            },
            scroll_top_duration
        );
    });

    var car_item_2 = $("#car_item_2");
    car_item_2.owlCarousel({
        margin: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 3,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 2,
            },
        },
    });

    var car_item_3 = $("#car_item_3");
    car_item_3.owlCarousel({
        margin: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 3,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });

    var car_item_4 = $("#car_item_4");
    car_item_4.owlCarousel({
        margin: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 4,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    });

    var car_item_1 = $("#car_item_1");
    car_item_1.owlCarousel({
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 1,
        dots: true,
        loop: true,
    });
    var whoweare = $("#whoweare");
    whoweare.owlCarousel({
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 1,
        dots: true,
        loop: true,
    });

    /* =================================
	MAGNIFIC POPUP
  =================================== */

    $.extend(true, $.magnificPopup.defaults, {
        // Allow embed youtube (playlist, etc)
        iframe: {
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: function (src) {
                        // link pattern
                        var mt = src.match(/v=([^&]+)(&(.*))?/);
                        if (mt) return mt[1] + "?" + mt[3];

                        // embed pattern
                        mt = src.match(/embed\/([^\?\/]+)(\?(.*))?/);
                        if (mt) return mt[1] + "?" + mt[3];
                    },
                    src: "//www.youtube.com/embed/%id%&autoplay=1&rel=0",
                },
            },
        },

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) this.st.focus = false;
            },
        },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false,
    });

    /* =================================
	ISOTOP
	=================================== */

    var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        isFitWidth: true,
        masonry: {
            columnWidth: ".grid-sizer",
        },
    });

    $grid.imagesLoaded().progress(function () {
        $grid.isotope("layout");
    });

    $("#filter2 a").on("click", function () {
        $("#filter2 .active").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $grid.isotope({
            filter: selector,
            animationOptions: {
                duration: 500,
                animationEngine: "jquery",
            },
        });
        return false;
    });

    var $gridv2 = $(".grid-v1");
    $gridv2.isotope({
        itemSelector: ".grid-item-v1",
        isFitWidth: true,
        filter: ".design",
        masonry: {
            columnWidth: ".grid-sizer-v1",
        },
    });

    $gridv2.imagesLoaded().progress(function () {
        $gridv2.isotope("layout");
    });

    $(".portfolio_filter a").on("click", function () {
        $(".portfolio_filter .active").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $gridv2.isotope({
            filter: selector,
            animationOptions: {
                duration: 500,
                animationEngine: "jquery",
            },
        });
        return false;
    });
});