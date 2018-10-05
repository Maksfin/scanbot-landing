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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcblxuICAvLyBMaXN0ZW5lciBXaW5kb3cgc2Nyb2xsXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgIGhlYWRlckZpeCgpO1xuICB9KTtcblxuICAvLyBGaXhlZCBoZWFkZXJcbiAgZnVuY3Rpb24gaGVhZGVyRml4KCkge1xuICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgdmFyIGhlYWRlciA9ICQoJy5oZWFkZXInKTtcblxuXG4gICAgaWYgKHNjcm9sbCA+IGhlYWRlci5oZWlnaHQoKSAtIDUpIHtcbiAgICAgIGhlYWRlci5hZGRDbGFzcygnanMtZml4ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdqcy1maXhlZCcpO1xuICAgIH1cbiAgfVxuXG5cbn0pOyJdfQ==
