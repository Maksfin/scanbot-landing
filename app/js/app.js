$(function () {

  // Listener Window scroll
  $(window).scroll(function () {
    headerFix();
  });

  // Fixed header
  function headerFix() {
    var scroll = $(window).scrollTop();
    var header = $('.header');


    if (scroll > header.height() - 5) {
      header.addClass('js-fixed');
    } else {
      header.removeClass('js-fixed');
    }
  }


});