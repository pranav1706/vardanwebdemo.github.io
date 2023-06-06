//========== Preloader ========== //
$(window).on("load", function () {
  $("#loader").delay(1000).fadeOut(500);
  function removeLoader() {
    $("body").removeClass("loading");
  }
  setInterval(removeLoader, 1000);
});

//========== Back-To-Top ========== //
$(window).on("load", function () {
  //Get the button
  let mybutton = document.getElementById("back-to-top");
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
});

 

//========== Hanburger-Menu Animation ========== //
$(document).ready(function(){
	$('#ham-menu').click(function(){
		$(this).toggleClass('open');
	});
});

//========== Header-Tab ========== //
$(document).ready(function(){
	$('.navbar-nav li a').on('click',function(){
        $('.navbar-nav li a').removeClass('active');
		$(this).addClass('active');
	});
});

//========== Swiper-Slider (Banner) ========== //
jQuery(document).ready(function(){
	const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        autoplay: {
            delay: 5000,
          },
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
});


//========== Fixed Header ========== //
$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.mainbar').addClass('fixed-header');
        $('main').css('margin-top','100px');
    }
    else {
        $('.mainbar').removeClass('fixed-header');
        $('main').css('margin-top','0px');

    }
});

// smooth scroll to anchor, with option of hash appearing in url. Thanks:
// https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 100, 'swing', function () {
	        // window.location.hash = target;
	    });
	});
});