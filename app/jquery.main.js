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

  $('.js-section-scroll').on('click touchend', function(e) {
    e.preventDefault();

    var section = $(this).attr('href');
    var $section = $(section);

    $('html, body').animate({
      scrollTop: $section.offset().top + 'px'
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

  $(".-js-slide").click(function(e) {
    e.preventDefault();
    $(this).closest(".wrapper").find(".--read-more").toggleClass("--move-in");
  });

});