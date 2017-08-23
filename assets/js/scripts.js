//@codekit-prepend "../bower_components/jquery/dist/jquery.js"
//@codekit-prepend "../bower_components/slick-carousel/slick/slick.js"

var a,
Akashi = {

  settings: {
    menuTrigger: $("#menuTrigger"),
    carouselTrigger: $("#carouselTrigger"),
    menuLink: $(".menu__link"),
    header: $(".main-header__bar")
  },

  init: function() {
    a = this.settings;
    this.bindUIActions();
    Akashi.carousel();
  },

  bindUIActions: function() {
    a.menuTrigger.on("click", function() {
      Akashi.toggleMenu();
    });
    a.carouselTrigger.on("click", function(event) {
      Akashi.openCarousel(event);
    });
    a.menuLink.on("click", function(event) {
      var link = this;
      Akashi.scroll(event, link);
    });

  },
  carousel: function () {
    $('.carousel').slick({
      'dots': true
    });
  },  

  toggleMenu: function() {
    $('.menu__toggle').toggleClass('animate');
    $('.menu').toggleClass('animate');
  },

  openCarousel: function (event) {
    event.preventDefault();
    $('.slick-slider').css('visibility', 'visible');
    $('.slick-slider').css('opacity', '1');
  },
  scroll: function(event, link) {
      var target = $(link.hash);
      target = target.length ? target : $('[name=' + link.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('.slick-slider').css('visibility', 'hidden');
        $('.slick-slider').css('opacity', '0');
        $('.menu__toggle').removeClass('animate');
        $('.menu').removeClass('animate');
        $('html, body').animate({
          scrollTop: target.offset().top - a.header.outerHeight()
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }

  }

};

Akashi.init();