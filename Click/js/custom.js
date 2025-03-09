// Sidebar Toggle

$('document').ready(function () {
    $('.hideshow').click(function () {
        $('.sidebar, .sidebar + .contentBody').toggleClass('active');
    });
    $('.mb_filter').click(function () {
        $('.overlay, .sidebar').toggleClass('active');
    });
    $('.hamburger, .overlay').click(function(){
        $('.sidebar, .overlay').removeClass('active');
    });

    $('.desktopviewbtn').click(function(){
        $('.sidebar, .contentBody').toggleClass('active');
    });
    $('.mobileivewbtn').click(function(){
        $('.sidebar, .contentBody, .overlay').removeClass('active');
    });

});


// Social Media

$('document').ready(function () {
    $('.share_btn').click(function () {
        $('.socialItems').toggleClass('active');
    });
});




// Menu Nav

$('document').ready(function () {
    $('.hamburger').click(function () {
        $('.navigation').toggleClass('active');
    });
});


$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.navigation').removeClass('active');
    } else {
       
    }
});



// HERO SLIDER

var menu = [];
jQuery('.swiper-slide').each(function (index) {
    menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
});
var interleaveOffset = 0.5;
var swiperOptions = {
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    on: {
        progress: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress;
                var innerOffset = swiper.width * interleaveOffset;
                var innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
            }
        },

        touchStart: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
            }
        },

        setTransition: function (speed) {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
            }
        }
    }
};

var swiper = new Swiper(".swiper-container", swiperOptions);

// DATA BACKGROUND IMAGE
var sliderBgSetting = $(".slide-bg-image");
sliderBgSetting.each(function (indx) {
    if ($(this).attr("data-background")) {
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
});



// Multi Steps Form

$(document).ready(function () {
    var current_fs, next_fs, previous_fs;
    // No BACK button on first screen
    if ($(".show").hasClass("first-screen")) {
        $(".prev").css({ 'display': 'none' });
    }

    // Next button
    $(".next-button").click(function () {

        current_fs = $(this).parent().parent();
        next_fs = $(this).parent().parent().next();

        $(".prev").css({ 'display': 'block' });

        $(current_fs).removeClass("show");
        $(next_fs).addClass("show");

        $("#progressbar li").eq($(".card2").index(next_fs)).addClass("active");

        current_fs.animate({}, {
            step: function () {

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });

                next_fs.css({
                    'display': 'block'
                });
            }
        });
    });

    // Previous button
    $(".prev").click(function () {

        current_fs = $(".show");
        previous_fs = $(".show").prev();

        $(current_fs).removeClass("show");
        $(previous_fs).addClass("show");

        $(".prev").css({ 'display': 'block' });

        if ($(".show").hasClass("first-screen")) {
            $(".prev").css({ 'display': 'none' });
        }

        $("#progressbar li").eq($(".card2").index(current_fs)).removeClass("active");

        current_fs.animate({}, {
            step: function () {

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });

                previous_fs.css({
                    'display': 'block'
                });
            }
        });
    });

});


// Fancybox Portfolio

$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});

