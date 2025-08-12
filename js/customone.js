$(document).ready(function() {
    $("li:first-child").addClass("first"), $("li:last-child").addClass("last"), $('[href="#"]').attr("href", "javascript:;"), $(".menu-Bar").click(function() {
        $(this).toggleClass("open"), $(".menuWrap").toggleClass("open"), $("body").toggleClass("ovr-hiddn"), $("body").toggleClass("overflw")
    }), $(".index-slider").slick({
        dots: !1,
        arrows: !0,
        infinite: !0,
        speed: 1e3,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 1400,
        responsive: [{
            breakpoint: 1441,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: !0,
                dots: !1,
                arrows: !1
            }
        }, {
            breakpoint: 825,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                dots: !1,
                arrows: !1
            }
        }]
    }), $(".index-slider2").slick({
        dots: !1,
        arrows: !1,
        infinite: !0,
        speed: 800,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        responsive: [{
            breakpoint: 825,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                dots: !1,
                arrows: !1
            }
        }]
    }), $(".m-silder").slick({
        dots: !0,
        arrows: !0,
        infinite: !0,
        fade: !0,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        responsive: [{
            breakpoint: 825,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                dots: !0,
                arrows: !1
            }
        }]
    }), $(".product-slid").slick({
        dots: !1,
        arrows: !1,
        infinite: !0,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        responsive: [{
            breakpoint: 825,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                dots: !1,
                arrows: !1
            }
        }]
    }), $(".client-slider").slick({
        dots: !1,
        arrows: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        responsive: [{
            breakpoint: 825,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                dots: !1,
                arrows: !1
            }
        }]
    }), $(".event-slider").slick({
        dots: !1,
        arrows: !0,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !1,
        autoplaySpeed: 2e3,
        centerMode: !0,
        responsive: [{
            breakpoint: 825,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                dots: !1,
                arrows: !1
            }
        }]
    }), $(".count").each(function() {
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4e3,
            easing: "swing",
            step: function(s) {
                $(this).text(Math.ceil(s))
            }
        })
    }), $("ul.faq-ul li.active div").slideDown(), $("ul.faq-ul li h4").click(function() {
        $("ul.faq-ul li").removeClass("active"), $(this).parent("li").addClass("active"), $("ul.faq-ul li div").slideUp(), $(this).parent("li").find("div").slideDown()
    }), $(".faq-ul>li").click(function() {
        $(this).addClass("active"), $(this).siblings().removeClass("active")
    }), $(".fancybox-media").fancybox({
        openEffect: "none",
        closeEffect: "none",
        helpers: {
            media: {}
        }
    }), $(".searchBtn").click(function() {
        $(".searchWrap").addClass("active"), $(".overlay").fadeIn("active"), $(".searchWrap input").focus(), $(".searchWrap input").focusout(function(s) {
            $(this).parents().removeClass("active"), $(".overlay").fadeOut("active"), $("body").removeClass("ovr-hiddn")
        })
    })
}), $(window).on("load", function() {
    var s = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $("ul.menu li a").each(function() {
        $(this).attr("href") == s && ($(this).removeClass("active"), $(this).closest("li").addClass("active"), $("ul.menu li.first").removeClass("active"))
    })
}), $("[data-targetit]").on("click", function(s) {
    $(this).addClass("current"), $(this).siblings().removeClass("current");
    var e = $(this).data("targetit");
    $("." + e).siblings('[class^="box-"]').hide(), $("." + e).fadeIn()
}), $(window).scroll(function() {
    $(this).scrollTop() > 500 ? $("").addClass("box-visable") : $("").removeClass("box-visable")
}), $("[data-targetit]").on("click", function(s) {
    $(".test").slick("setPosition")
}), $(document).ready(function() {
    setTimeout(function() {
        $(".signUpPoptwo").fadeIn(), $(".overlay").fadeIn()
    }, 2e3)
}), $(".popupMaintwo .closePoptwo,.overlay").click(function() {
    $(".signUpPoptwo").fadeOut(), $(".overlay").fadeOut()
}), $(".dispopup").click(function() {
    $(".signUpPoptwo").fadeIn(), $(".overlay").fadeIn()
});