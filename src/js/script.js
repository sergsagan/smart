$(function(){
    $('.spritespin').spritespin({
        width: 600,
        height: 600,
        source: SpriteSpin.sourceArray('/img/rotate_watch_{frame}.jpg', { frame: [1,24], digits: 3 }),
        sense: -1,
        responsive: true,
        animate: false

    });
});

$(function() {
	
    $("head").append("<link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />");
	
	//anchor links
	
	$(".nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	
	$('.nav li a').click(function () {
		$('li a').removeClass('active');
		$(this).addClass('active');
		return true;
	});

    // $('section[data-type="background"]').each(function(){
    //     var $bgobj = $(this);
    //     $(window).scroll(function() {
    //         var yPos = -($window.scrollTop() / $bgobj.data('speed'));
    //
    //         var coords = '50% '+ yPos + 'px';
    //         $bgobj.css({ backgroundPosition: coords });
    //     });
    // });


    //Scroll Top
	
	// $('#scrollUp').mouseover(function(){
	// 	$( this ).animate({opacity: 0.65},100);
	// }).mouseout( function(){
	// 	$( this ).animate({opacity: 1},100);
	// }).click(function(e){
	// 	e.preventDefault();
	// 	$('body,html').animate({ scrollTop: 1 }, 1000);
	// });

    $stiky = $(".header");
    $window = $(window);
    $h = $stiky.offset().top;
    $window.scroll(function(){
        if ( $window.scrollTop() > $h) {
            $stiky.addClass("fixed");
        }else{
            //Иначе возвращаем всё назад
            $stiky.removeClass("fixed");
        }
    });

	
	//modal
	
	$('.btn-buy').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400, function(){
			$('#order-popup').css('display', 'block');
			$('#order-popup').animate({top: '20%'}, 200);
		});
	});
	
	$('.close-btn').click( function(){
		$('#order-popup').animate({top: '45%'}, 200,
			function(){
				$(this).css('display', 'none');
				$('#overlay').fadeOut(400);
			}
		);
	});

    $('.slider1-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider1-nav'
    });
    $('.slider1-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider1-for',
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.responsive').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });


    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('.drop');

        $(this).closest('.accordion').find('.drop').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });


    $.stellar({
        horizontalScrolling: false,
        responsive: true

    });


    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
	$("#feadback-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('#feadback-form')[0].reset(
				setTimeout(function () {}, 1000)
			);
			
			$('#popUpMessage').removeClass('hiddenDiv');
			setTimeout(function () {
				$('#popUpMessage').addClass('hiddenDiv');
			}, 2000);
		});
		return false;
	});
});


