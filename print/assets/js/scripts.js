jQuery(document).ready(function () {
      jQuery('.owlCarousel').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 0,
        speed: 6000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
            breakpoint: 1366,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
            }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
                },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
            }
        ]
      });

       jQuery('.stackYawanSlider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
            breakpoint: 1366,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: true,
            }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
                },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
            }
        ]
      });

    jQuery('.twSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        speed: 6000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
            breakpoint: 1366,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
            }
            },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
                },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
            }
        ]
      });


    jQuery('.fresh-update-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        arrows: true,
        dots: true,
        prevArrow:"<div class='a-left control-c prev slick-prev'><img src='assets/images/leftArrow.svg'></div>",
        nextArrow:"<div class='a-right control-c next slick-next'><img  src='assets/images/rightArrow2.svg'></div>",
        responsive: [
            {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
            }
        ]
        });

        jQuery('.partner-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:"<div class='a-left control-c prev slick-prev'><img src='assets/images/leftArrow.svg'></div>",
        nextArrow:"<div class='a-right control-c next slick-next'><img  src='assets/images/rightArrow2.svg'></div>",
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
            }
        ]
        });

        jQuery('.meet-mind-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: false,
            prevArrow:"<div class='a-left control-c prev slick-prev'><img src='assets/images/leftArrow.svg'></div>",
            nextArrow:"<div class='a-right control-c next slick-next'><img  src='assets/images/rightArrow2.svg'></div>",
            responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: false,
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: false,
            }
            }
        ]
        });
        
        $(".hamburg-icon, .crossICon").click(function(){
            $(".main-nav-slide-wrap").toggleClass("active");
            $("body").toggleClass("overFlowHiddden");
        });

        $(document).on('click', '[data-move-to]', function (event) {
            event.preventDefault();
            if ($(".main-nav-slide-wrap").hasClass("active")) {
                $(".main-nav-slide-wrap").toggleClass("active");
                $("body").toggleClass("overFlowHiddden");
            }
            var _move_to = $( this ).attr( 'data-move-to' );
            $('html, body').animate({
                scrollTop: $( '#'+_move_to ).offset().top
            }, 1000);
        });
        AOS.init();
   });