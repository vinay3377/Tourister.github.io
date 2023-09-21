jQuery.noConflict();
jQuery(document).ready(function($){
    "use strict";
    /**
     * Mobile Menu
     */
        $("div.dt-header-menu").each(function() {
            var d = $(this).data('menu'),
                c = $(this).find('ul[data-menu="'+d+'"]').clone(),
                m = $('body').find('.mobile-menu[data-menu="'+d+'"]');

            $('[data-animation]', c ).each(function(ix, ele ){
                var $classes = $(ele).attr("class"),
                    $animation = $(ele).attr("data-animation");

                $classes = $classes.replace($animation, '');
                $(ele).attr("class", $classes);
            });

            c.prependTo(m);
            m.appendTo( $("body") );
            $('<div class="mobile-menu-overlay"></div>').appendTo( $("body") );
        });

        // Opening Mobile Nav
        $('.menu-trigger').on('click', function( event ){
            $('.mobile-menu').toggleClass('nav-is-visible');
            $('.mobile-menu-overlay').toggleClass('is-visible');
            $('body').toggleClass('nav-is-visible');
        });

        // Closing Mobile Nav
        function closeMobNav() {
            $('body').removeClass('nav-is-visible');
            $('.mobile-menu-overlay').removeClass('is-visible');
            $('.mobile-menu').removeClass('nav-is-visible');
            $('.menu-item-has-children a').removeClass('selected');        
            $('.menu-item-has-children ul.sub-menu').addClass('is-hidden');            
        }

        $('li.close-nav').on('click', function(event) {
            closeMobNav();
        });

        $('.mobile-menu-overlay').on('click', function(event) {
            closeMobNav();
        });        

        // Sub Menu in Mobile Menu
        $('.menu-item-has-children > a, .page_item_has_children > a').on('click', function(event) {
            if ( $('body').hasClass('nav-is-visible') ) {
                event.preventDefault();
                var a = $(this).clone();
                $(this).next('.sub-menu').find('.see-all').html(a);
            }

            var selected = $(this);
            if( selected.next('ul').hasClass('is-hidden') ) {
                selected.addClass('selected').next('ul.sub-menu').removeClass('is-hidden');
            } else {
                selected.removeClass('selected').next('ul.sub-menu').addClass('is-hidden');
            }
        });

        // Go Back in Mobile Menu
        $('.go-back').on('click', function() {
            $(this).parent('ul:not(.menu)').addClass('is-hidden');
        });

        // For Video Post
        if( $("div.dt-video-wrap").length ) {
           $("div.dt-video-wrap").fitVids();
        }

        // Smart Resize
        $(window).on("resize", function() {
            // Blog Isotope
            if( $(".apply-isotope").length ) {
                $(".apply-isotope").isotope({itemSelector : '.column',transformsEnabled:false,masonry: { columnWidth: '.grid-sizer' } });
            }
        });

        if( $('.single .entry-thumb.single-preview-img a.mag-pop, a.lightbox-preview-img').length ) {
            $('.single .entry-thumb.single-preview-img a.mag-pop, a.lightbox-preview-img').magnificPopup({
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                image: {
                  verticalFit: true,
                  titleSrc: function(item) {
                    return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('href')+'" target="_blank">image source</a>';
                  }
                },
                zoom: {
                  enabled: true,
                  duration: 300, // don't foget to change the duration also in CSS
                  opener: function(element) {
                    return element.find('img');
                  }
                }
            });
        }

        //$("select:not(.dt-select-staff)").each(function() {
        $("select").each(function() {
            $(this).select2();
        });

        // Remove Select2 Js for Controls...
        if ( jQuery('select#services').hasClass("select2-hidden-accessible") ) {
            jQuery('select#services').select2('destroy');
        }
        if ( jQuery('select.dt-select-staff').hasClass("select2-hidden-accessible") ) {
            jQuery('select.dt-select-staff').select2('destroy');
        }
});

(function ($) {
    $(window).on('load', function() {

        // Gallery Post Slider
        if( ($("ul.entry-gallery-post-slider").length) && ( $("ul.entry-gallery-post-slider li").length > 1 ) ){
            $("ul.entry-gallery-post-slider").bxSlider({mode: 'fade', auto:false, video:true, pager:'', autoHover:true, adaptiveHeight:false, responsive: true });
        }

        // Blog Isotope
        if( $(".apply-isotope").length ) {
            $(".apply-isotope").isotope({itemSelector : '.column',transformsEnabled:false,masonry: { columnWidth: '.grid-sizer' } });
        }

        // Blog Equal Height
        if( $('.tpl-blog-holder.apply-equal-height').length ) {
            $(".tpl-blog-holder.apply-equal-height article").matchHeight({ property:"min-height" });
        }
    });
})(jQuery);