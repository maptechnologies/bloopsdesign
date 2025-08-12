$(function() {
    var myLazyLoad = new LazyLoad({
        elements_selector: ".lazy"
        // load_delay: 300 //adjust according to use case
    });
});

AOS.init({
    disable: function() {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
    }
});

var a = 0;
$(window).scroll(function() {
    var e = $("#counter").offset().top - window.innerHeight;
    0 == a &&
        $(window).scrollTop() > e &&
        ($(".counter-value").each(function() {
                var e = $(this),
                    s = e.attr("data-count");
                $({
                    countNum: e.text()
                }).animate({
                    countNum: s
                }, {
                    duration: 7e3,
                    easing: "swing",
                    step: function() {
                        e.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        e.text(this.countNum);
                    },
                });
            }),
            (a = 1));
});

// $(".testimonial-sec").ripples({ resolution: 512, dropRadius: 20, perturbance: 0.04 });

$('.service-slider .owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 4000,
    navText: ["<img src='images/webp/serv-slider-prev-img.webp'>", "<img src='images/webp/serv-slider-next-img.webp'>"],
    responsive: {
        0: {
            items: 1,
            dots: true,
        },
        600: {
            items: 1,
            dots: true,
        },
        1000: {
            items: 3,
            dots: true,
        }
    }
});


$('#demo').carousel({
    interval: 2000,
    cycle: true
});

$(".outer-show").click(function() {
    $('body').toggleClass('show');
    $('.floatingform-sec').toggleClass('show');
    $('.overlayfloatingform').toggleClass('show');
});


$(".clickbutton").click(function() {
    $('.overlayfloatingform').removeClass('show');
});


$(document).ready(function() {
    $(".clickbutton").click(function() {
        $('.floatbutton').toggleClass("active");
        $('.crossplus').toggleClass("rotate");
    });

    $(".topformswitch").click(function() {
        $('.topformwrap').toggleClass("active");
    });

});

$('.package-slider-box .owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ["<img src='images/webp/package-prev-img.webp'>", "<img src='images/webp/package-next-img.webp'>"],
    dots: false,
    responsive: {
        0: {
            items: 1,
            dots: true,
        },
        600: {
            items: 1,
            dots: true,
        },
        991: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
$(window).width() <= 992 &&
    0 != ".packages-responsive-slider".length &&
    ($(".packages-responsive-slider").addClass("owl-carousel owl-theme"),
        $(".packages-responsive-slider").owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: false,
            autoplayTimeout: true,
            autoplayHoverPause: false,
            mouseDrag: true,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                },
                600: {
                    items: 1,
                    dots: true,
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        }));

$('.creation-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    navText: ["<img src='images/webp/creation-prev-img.webp'>", "<img src='images/webp/creation-next-img.webp'>"],
    dots: false,
    responsive: {
        0: {
            items: 1,
            dots: true,
        },
        480: {
            items: 1,
            dots: true,
        },
        576: {
            items: 1,
            dots: true,
        },
        768: {
            items: 1,
            dots: true,
        },
        992: {
            items: 3,
        }
    }
})

$('.testimonial-slider .owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    nav: true,
    navText: ["<img src='images/webp/test-prev-img.webp'>", "<img src='images/webp/test-next-img.webp'>"],
    autoplay: true,
    autoplayTimeout: 5000,
})


$('.tlt').textillate({
    loop: true,
    in: {
        effect: 'fadeInLeft',
        delayScale: 8,
        sync: false,
        shuffle: false,
        reverse: true
    },
    out: {
        effect: 'fadeOutRight',
        delayScale: 8,
        sync: false,
        shuffle: false,
        reverse: true
    },
});


$('.tlt-2').textillate({
    loop: true,
    in: {
        effect: 'bounceIn',
        delayScale: 8,
        sync: false,
        shuffle: false,
        reverse: false,
        sequence: true
    },
    out: {
        effect: 'bounceOut',
        delayScale: 8,
        sync: false,
        shuffle: false,
        reverse: false,
        sequence: true
    },
});

$('.tlt-3').textillate({
    loop: true,
    in: {
        effect: 'bounceIn',
        delayScale: 8,
        sync: false,
        shuffle: false,
        reverse: false,
        sequence: true
    },
    out: {
        effect: 'bounceOut',
        delayScale: 8,
        sync: false,
        shuffle: false,
        reverse: false,
        sequence: true
    },
});



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(window).width() <= 991 &&
    0 != ".counter-responsive-slider".length &&
    ($(".counter-responsive-slider").addClass("owl-carousel owl-theme"),
        $(".counter-responsive-slider").owlCarousel({
            loop: !1,
            margin: 0,
            nav: !1,
            dots: !1,
            autoplay: !1,
            autoplayTimeout: !1,
            autoplayHoverPause: !1,
            mouseDrag: !0,
            responsive: {
                0: {
                    items: 1
                },
                460: {
                    items: 1
                },
                991: {
                    items: 4
                }
            },
        }));

$(window).width() <= 991 &&
    0 != ".portfolio-responsive-slider".length &&
    ($(".portfolio-responsive-slider").addClass("owl-carousel owl-theme"),
        $(".portfolio-responsive-slider").owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: false,
            autoplayTimeout: true,
            autoplayHoverPause: false,
            mouseDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                460: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 2
                }
            },
        }));

$(window).width() <= 991 &&
    0 != ".process-slider".length &&
    ($(".process-slider").addClass("owl-carousel owl-theme"),
        $(".process-slider").owlCarousel({
            loop: false,
            margin: 10,
            nav: false,
            dots: true,
            autoplay: false,
            autoplayTimeout: true,
            autoplayHoverPause: false,
            mouseDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                460: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 2
                }
            },
        }));

$(window).width() <= 992 &&
    0 != ".web-design-gallery-slider".length &&
    ($(".web-design-gallery-slider").addClass("owl-carousel owl-theme"),
        $(".web-design-gallery-slider").owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: false,
            autoplayTimeout: true,
            autoplayHoverPause: false,
            mouseDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                575: {
                    items: 1
                },
                575: {
                    items: 1
                },
                768: {
                    items: 2
                },
            },
        }));


$(window).width() <= 991 &&
    0 != ".awards-responsive-slider".length &&
    ($(".awards-responsive-slider").addClass("owl-carousel owl-theme"),
        $(".awards-responsive-slider").owlCarousel({
            loop: !1,
            margin: 0,
            nav: !1,
            dots: true,
            autoplay: !1,
            autoplayTimeout: !1,
            autoplayHoverPause: !1,
            mouseDrag: !0,
            responsive: {
                0: {
                    items: 2
                },
                460: {
                    items: 3
                },
                767: {
                    items: 3
                },
                991: {
                    items: 3
                }
            },
        }));


$(window).width() <= 991 &&
    0 != ".about-services-responsive-slider".length &&
    ($(".about-services-responsive-slider").addClass("owl-carousel owl-theme"),
        $(".about-services-responsive-slider").owlCarousel({
            loop: !1,
            margin: 0,
            nav: !1,
            dots: true,
            autoplay: !1,
            autoplayTimeout: !1,
            autoplayHoverPause: !1,
            mouseDrag: !0,
            responsive: {
                0: {
                    items: 1
                },
                460: {
                    items: 1
                },
                767: {
                    items: 1
                },
                991: {
                    items: 1
                }
            },
        }));

$('.feature-slider-box .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});


$(window).width() <= 991 &&
    0 != ".video-anim-process-responsive-slider".length &&
    ($(".video-anim-process-responsive-slider").addClass("owl-carousel owl-theme"),
        $(".video-anim-process-responsive-slider").owlCarousel({
            loop: !1,
            margin: 0,
            nav: !1,
            dots: true,
            autoplay: !1,
            autoplayTimeout: !1,
            autoplayHoverPause: !1,
            mouseDrag: !0,
            responsive: {
                0: {
                    items: 1
                },
                460: {
                    items: 1
                },
                767: {
                    items: 1
                },
                991: {
                    items: 2
                }
            },
        }));


$(window).width() <= 991 &&
    0 != ".content-serv-sec-responsive-slider".length &&
    ($(".content-serv-sec-responsive-slider").addClass("owl-carousel owl-theme"),
        $(".content-serv-sec-responsive-slider").owlCarousel({
            loop: !1,
            margin: 0,
            nav: !1,
            dots: true,
            autoplay: !1,
            autoplayTimeout: !1,
            autoplayHoverPause: !1,
            mouseDrag: !0,
            responsive: {
                0: {
                    items: 1
                },
                460: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 2
                }
            },
        }));


$(window).width() <= 991 &&
    0 != ".features-box-responsive-slider".length &&
    ($(".features-box-responsive-slider").addClass("owl-carousel owl-theme"),
        $(".features-box-responsive-slider").owlCarousel({
            loop: !1,
            margin: 0,
            nav: !1,
            dots: true,
            autoplay: !1,
            autoplayTimeout: !1,
            autoplayHoverPause: !1,
            mouseDrag: !0,
            responsive: {
                0: {
                    items: 1
                },
                460: {
                    items: 1
                },
                767: {
                    items: 1
                },
                991: {
                    items: 2
                }
            },
        }));


$(window).width() <= 991 && 0 != ".seo-process-responsive-slider".length &&
    ($(".seo-process-responsive-slider").addClass("owl-carousel owl-theme"),
        $(".seo-process-responsive-slider").owlCarousel({
            loop: !1,
            margin: 0,
            nav: !1,
            dots: true,
            autoplay: !1,
            autoplayTimeout: !1,
            autoplayHoverPause: !1,
            mouseDrag: !0,
            responsive: {
                0: {
                    items: 1
                },
                460: {
                    items: 1
                },
                767: {
                    items: 1
                },
                991: {
                    items: 1
                }
            },
        }));





$('.branding-content-serv-slider .owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

$(".package-main-box .package-content .slim-scroll ul").slimScroll({
    height: "400px",
    color: "#ff7e3f"
}), 0 != $(".scroll").length && $(".scroll").slimScroll({
    height: "150px",
    size: "6px",
    color: "#ef4122",
    alwaysVisible: !0,
    distance: "16px",
    railVisible: !0,
    railColor: " #ef4122",
    railOpacity: 1,
    railBorderRadius: "0px",
    wheelStep: 10,
    disableFadeOut: !1
});

$(".pricing-item .slim-scroll ul").slimScroll({
    height: "300px",
    color: "#ff7e3f"
}), 0 != $(".scroll").length && $(".scroll").slimScroll({
    height: "160px",
    size: "6px",
    color: "#ef4122",
    alwaysVisible: !0,
    distance: "16px",
    railVisible: !0,
    railColor: " #ef4122",
    railOpacity: 1,
    railBorderRadius: "0px",
    wheelStep: 10,
    disableFadeOut: !1
});





$('.popupBox').click(function() {

    var package_price = $(this).parent().parent().find('h2').text();
    var package_name = $(this).parent().parent().find('h3').text();
    var priceText = $(this).parents('.package-main-box, .view-detail-box').find('.package-pr h2, .view-detail-price').text();
    var titleText = $(this).parents('.package-main-box, .view-detail-box').find('.fleft h3, .view-detail-title').text();
    // alert(priceText + titleText)
    $('#req_qoute input[name="price"]').val(priceText);
    $('#req_qoute input[name="title"]').val(titleText);
    $('.package_name_zee').val(package_name);
    $('.package_price_zee').val(package_price);


    $('#req_qoute').modal('show')

});

if ($(window).width() >= 767) {
    $(".HowToHelp_box_wrap").click(function() {
            var e = $(this).parents(".animation-tabs"),
                t = $(this).data("box");
            console.log(t), $(".HowToHelp_box_wrap").parent("ul").attr("class", "animation-tabs nav nav-tabs"), e.addClass("animation-tabs nav nav-tabs " + t);
        }),
        gsap.registerPlugin(ScrollTrigger);
    let e = document.querySelectorAll(".help-you");
    var cubeTL = gsap.timeline({
        scrollTrigger: {
            trigger: e,
            toggleActions: "play none none none",
            start: "top 45%",
            end: "center 60%",
            markers: !1,
            scrub: !0
        }
    });

    function removeDynamicClass() {
        $(".HowToHelp_box_wrap").parent("ul").attr("class", "animation-tabs nav nav-tabs"), $(".HowToHelp_box").removeClass("active"), $(".item-3 a").addClass("active");
    }

    function addListActive() {
        $(".item-3 a").addClass("active");
    }
    cubeTL
        .to(".HowToHelp_box_wrap", {
            onUpdate: removeDynamicClass,
            onRepeat: addListActive
        })
        .to(".item-1", {
            transform: "rotate(-34deg) scale(1)",
            zIndex: "0"
        }, "-=.95")
        .to(".item-5", {
            transform: "rotate(34deg) scale(1)",
            zIndex: "4"
        }, "-=.9")
        .to(".item-2", {
            transform: "rotate(-17deg) scale(1)",
            zIndex: "1"
        }, "-=.85")
        .to(".item-4", {
            transform: "rotate(17deg) scale(1)",
            zIndex: "3"
        }, "-=.8")
        .to(".item-3", {
            transform: "rotate(0deg) scale(1)",
            zIndex: "2"
        });
}