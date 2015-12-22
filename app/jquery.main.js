$(function() {

  var $window = $(window),
    $logo = $('.landing--logo');
  var $logoOffset = $logo.offset().top;

  $window.scroll(function() {

    var $scroll = $window.scrollTop();

    if (($logoOffset - $(window).scrollTop()) < 20) {
      $logo.css('opacity', 0);
      $('.down--arrow').css('opacity', 0);

      $('.naviagtion--buttons_button').each(function(i) {

        setTimeout(function() {
          $('.naviagtion--buttons_button').eq(i).addClass('--show');
        }, 150 * (i + 1));
      });

    } else {
      $logo.css('opacity', 1);
      $('.down--arrow').css('opacity', 1);

      $('.naviagtion--buttons_button').each(function(i) {

        setTimeout(function() {
          if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('.naviagtion--buttons_button').eq(i).removeClass('--show');
          };
        }, 150 * (i + 1));
      });

    }

    var $logoMoveAmount = -50 + $scroll / 5;

    $logo.css({
      'transform': 'translate(-50%, ' + $logoMoveAmount + '%)'
    });
  });

  $logo.on('click touchend', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $('#section_nav').offset().top
    }, 1000);
  });

  $('.home').on('click touchend', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $('#section_nav').offset().top
    }, 1000);
  });

  $('.down--arrow').on('click touchend', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $('#section_nav').offset().top
    }, 1000);
  });

  $('.nav-to-about').on('click touchend', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $('#section_about').offset().top
    }, 1000);
  });

  $('.about-to-work').on('click touchend', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $('#section_work').offset().top
    }, 1000);
  });

  $('.work-to-info').on('click touchend', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $('#section_info').offset().top
    }, 1000);
  });

  $('.info-to-contact').on('click touchend', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $('#section_contact').offset().top
    }, 1000);
  });

  $('.--about').on('click touchend', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $('#section_about').offset().top
    }, 1000);
  });

  $('.--work').on('click touchend', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $('#section_work').offset().top
    }, 1000);
  });

  $('.--info').on('click touchend', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $('#section_info').offset().top
    }, 1000);
  });

  $('.--contact').on('click touchend', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $('#section_contact').offset().top
    }, 1000);
  });

  $('.back-to-top').on('click touchend', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $('#section_nav').offset().top
    }, 1000);
  });

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.naviagtion--buttons_button').addClass('--show');
    $('.naviagtion--buttons_button').children().addClass('--show');
  } else {
    $('.naviagtion--buttons_button').hover(
      function() {
        $(this).children().addClass('--show')
      },
      function() {
        $(this).children().removeClass('--show')
      }
    );
  }

  $(".-js-slide").click(function(event) {
    event.preventDefault();
    $(this).closest(".wrapper").find(".--read-more").toggleClass("--move-in");
  });

});