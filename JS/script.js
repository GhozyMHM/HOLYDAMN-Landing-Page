var navbar = document.getElementsByClassName('navbar-holy')[0]

        window.onscroll = function() {
            if (window.pageYOffset > 300) {
                navbar.style.background = "black";
            }
            else {
                navbar.style.background = "rgb(34, 34, 34)";
            }
        }

var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 65,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true,
                },
            pagination: {
                el: '.swiper-pagination',
                },
        });

"use strict";

jQuery(document).ready(function($){
    /************** Gallery Hover Effect *********************/
    $(".overlay").hide();
    $('.gallery-item').hover(
    function() {
        $(this).find('.overlay').addClass('animated fadeIn').show();
        },
        function() {
            $(this).find('.overlay').removeClass('animated fadeIn').hide();
        }
    );
        
        
    /************** LightBox *********************/
    $(function(){
        $('[data-rel="lightbox"]').lightbox();
    });
        
    $("a.menu-toggle-btn").click(function() {
        $(".responsive_menu").stop(true,true).slideToggle();
        return false;
    });
    
    $(".responsive_menu a").click(function(){
        $('.responsive_menu').hide();
    });
    });
        
    /*----------------- Previous Next button ---------------------- */
    $(window).load(function(){
        $(document).ready(function(){				   
            $(".divs div.content").each(function(e) {
                if (e != 0)
                $(this).hide();
            });
            
            $("#next").click(function(){
                    loadScript();
                if ($(".divs div.content:visible").next().length != 0)
                    $(".divs div.content:visible").next().addClass("animated fadeInDown").show().prev().hide() ;
                else {
                    $(".divs div.content:visible").hide();
                    $(".divs div.content:first").addClass("animated fadeInDown").show() ;
                    
                }
                return false;
            });
        
            $("#prev").click(function(){
                        loadScript();				  
                if ($(".divs div.content:visible").prev().length != 0)
                    $(".divs div.content:visible").prev().addClass("animated fadeInDown").show().next().hide();
                else {
                    $(".divs div.content:visible").hide();
                    $(".divs div.content:last").addClass("animated fadeInDown").show();
                    
                }
                return false;
            });
        });
        
        });

jQuery(document).ready(function(jQuery) {            
    var topMenu = jQuery("#navid"),
    offset = 40,
    topMenuHeight = topMenu.outerHeight()+offset,
    
    // All list items
    menuItems =  topMenu.find('a[href*="#"]'),
    
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
    var href = jQuery(this).attr("href"),
    id = href.substring(href.indexOf('#')),
    item = jQuery(id);
    
    //console.log(item)
    if (item.length) { return item; }
});

// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = jQuery(this).attr("href"),
    id = href.substring(href.indexOf('#'));
    offsetTop = href === "#" ? 0 : jQuery(id).offset().top-topMenuHeight+1;
    jQuery('html, body').stop().animate({ 
        scrollTop: offsetTop
        }, 300);
    e.preventDefault();
});

// Bind to scroll
jQuery(window).scroll(function(){

    // Get container scroll position
    var fromTop = jQuery(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if (jQuery(this).offset().top < fromTop)
        return this;
    });

    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";               
    menuItems.parent().removeClass("active");
    if(id){
        menuItems.parent().end().filter("[href*='#"+id+"']").parent().addClass("active");
    }
            
    })
})

$('.button-title').click(function() { 
    $(this).find('i').toggleClass('fas fa-chevron-down fas fa-chevron-up'); 
}); 