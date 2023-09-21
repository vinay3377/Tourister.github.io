( function( $ ) {

	var dtTestimonialCarouselsWidgetHandler = function($scope, $){

        var carouselElement = $scope.find('.dt-sc-testimonial-wrapper.carousel_items').each(function(){
            var carouselSettings 	  = $(this).data('settings'),
				slides_to_show	 	  = (carouselSettings['slides_to_show'] !== undefined && carouselSettings['slides_to_show'] != '') ? parseInt(carouselSettings['slides_to_show']) : 1,
				slides_to_scroll 	  = (carouselSettings['slides_to_scroll'] !== undefined && carouselSettings['slides_to_scroll'] != '') ? parseInt(carouselSettings['slides_to_scroll']) : 1,
				space_between		  = (carouselSettings['space_between'] !== undefined && carouselSettings['space_between'] != '') ? parseInt(carouselSettings['space_between']) : '',
				
				effect			  	  = (carouselSettings['effect'] !== undefined) ? (carouselSettings['effect']) : 'slide',
				arrows			  	  = (carouselSettings['arrows'] !== undefined) ? (carouselSettings['arrows'] == 'yes') : false,
				pagination			  = (carouselSettings['pagination'] !== undefined) ? (carouselSettings['pagination']) : '',
				speed			 	  = (carouselSettings['speed'] !== undefined) ? parseInt(carouselSettings['speed']) : 400,
				auto			  	  = (carouselSettings['autoplay'] !== undefined) ? (carouselSettings['autoplay'] == 'yes') : false,
				autoplay_speed	 	  = (carouselSettings['autoplay_speed'] !== undefined) ? parseInt(carouselSettings['autoplay_speed']) : 2500,
				loop				  = (carouselSettings['loop'] !== undefined) ? (carouselSettings['loop'] == 'yes') : false,
				pause_on_interaction  = (carouselSettings['pause_on_interaction'] !== undefined) ? (carouselSettings['pause_on_interaction'] == 'yes') : false,

				slides_to_show_tablet = (carouselSettings['slides_to_show_tablet'] !== undefined && carouselSettings['slides_to_show_tablet'] != '') ? parseInt(carouselSettings['slides_to_show_tablet']) : 1,
				slides_to_scroll_tablet = (carouselSettings['slides_to_scroll_tablet'] !== undefined && carouselSettings['slides_to_scroll_tablet'] != '') ? parseInt(carouselSettings['slides_to_scroll_tablet']) : 1,
				space_between_tablet = (carouselSettings['space_between_tablet'] !== undefined && carouselSettings['space_between_tablet'] != '') ? parseInt(carouselSettings['space_between_tablet']) : '',

				slides_to_show_mobile = (carouselSettings['slides_to_show_mobile'] !== undefined && carouselSettings['slides_to_show_mobile'] != '') ? parseInt(carouselSettings['slides_to_show_mobile']) : 1,
				slides_to_scroll_mobile = (carouselSettings['slides_to_scroll_mobile'] !== undefined && carouselSettings['slides_to_scroll_mobile'] != '') ? parseInt(carouselSettings['slides_to_scroll_mobile']) : 1;
				space_between_mobile = (carouselSettings['space_between_mobile'] !== undefined && carouselSettings['space_between_mobile'] != '') ? parseInt(carouselSettings['space_between_mobile']) : '';

			var $swiperItem = $(this);

			var swiperOptions = {
				initialSlide: 0,
				simulateTouch: true,
				roundLengths: true,
				spaceBetween: space_between,
				keyboardControl: true,
				paginationClickable: true,
				autoHeight: true,
				grabCursor: true,

				slidesPerView: slides_to_show,
				slidesPerGroup: slides_to_scroll,
				loop:loop,
				
				effect: effect,
				speed: speed,

				breakpoints: {
					1024: {
						slidesPerView: slides_to_show_tablet,
						slidesPerGroup: slides_to_scroll_tablet,
						spaceBetween: space_between_tablet
					},
					768: {
						slidesPerView: slides_to_show_tablet,
						slidesPerGroup: slides_to_scroll_tablet,
						spaceBetween: space_between_tablet
					},
					640: {
						slidesPerView: slides_to_show_mobile,
						slidesPerGroup: slides_to_scroll_mobile,
						spaceBetween: space_between_mobile
					},
					320: {
						slidesPerView: slides_to_show_mobile,
						slidesPerGroup: slides_to_scroll_mobile,
						spaceBetween: space_between_mobile
					}
				}
			}

			if (arrows) {
				swiperOptions.navigation = {
					prevEl: $(this).find('.swiper-button-prev'),
					nextEl: $(this).find('.swiper-button-next')
				};
			}

			if (pagination != '') {
				swiperOptions.pagination = {
					el: $(this).find('.swiper-pagination'),
					type: pagination,
					clickable: true
				};
			}

			if (auto) {
				swiperOptions.autoplay = {
					delay: autoplay_speed,
					disableOnInteraction: pause_on_interaction
				};
			}

			var swiper = new Swiper($swiperItem, swiperOptions);
		});
	};
		
    $(window).on('elementor/frontend/init', function(){
    	elementorFrontend.hooks.addAction('frontend/element_ready/dt-testimonials.default', dtTestimonialCarouselsWidgetHandler);
	});	
} )( jQuery );