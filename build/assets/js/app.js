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

  // Set order step-1
  $('.js-open-form').on('click', function () {
    $(this).closest('.promo__main')
      .hide();

    $(this).closest('.promo__right-inner')
      .find('.promo__form').fadeIn();

  });

  // Set order step-2
  $('.js-form-submit:not(:disabled)').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.promo__right-inner')
      .find('.promo__succes').fadeIn();

    $(this).closest('.promo__form')
      .hide();
  });

  // Static mask
  $('input[type="tel"]').inputmask({
      'mask': '+7 (999) 999-99-99',
      'showMaskOnHover': false
  });

  // Modal
  $("[data-modal]").on("click", function () {
    $($(this).data("modal")).modal({
      fadeDuration: 300
    });
    return false;
  });
  

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuXG4gIC8vIExpc3RlbmVyIFdpbmRvdyBzY3JvbGxcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgaGVhZGVyRml4KCk7XG4gIH0pO1xuXG4gIC8vIEZpeGVkIGhlYWRlclxuICBmdW5jdGlvbiBoZWFkZXJGaXgoKSB7XG4gICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICB2YXIgaGVhZGVyID0gJCgnLmhlYWRlcicpO1xuXG5cbiAgICBpZiAoc2Nyb2xsID4gaGVhZGVyLmhlaWdodCgpIC0gNSkge1xuICAgICAgaGVhZGVyLmFkZENsYXNzKCdqcy1maXhlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ2pzLWZpeGVkJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IG9yZGVyIHN0ZXAtMVxuICAkKCcuanMtb3Blbi1mb3JtJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnLnByb21vX19tYWluJylcbiAgICAgIC5oaWRlKCk7XG5cbiAgICAkKHRoaXMpLmNsb3Nlc3QoJy5wcm9tb19fcmlnaHQtaW5uZXInKVxuICAgICAgLmZpbmQoJy5wcm9tb19fZm9ybScpLmZhZGVJbigpO1xuXG4gIH0pO1xuXG4gIC8vIFNldCBvcmRlciBzdGVwLTJcbiAgJCgnLmpzLWZvcm0tc3VibWl0Om5vdCg6ZGlzYWJsZWQpJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCcucHJvbW9fX3JpZ2h0LWlubmVyJylcbiAgICAgIC5maW5kKCcucHJvbW9fX3N1Y2NlcycpLmZhZGVJbigpO1xuXG4gICAgJCh0aGlzKS5jbG9zZXN0KCcucHJvbW9fX2Zvcm0nKVxuICAgICAgLmhpZGUoKTtcbiAgfSk7XG5cbiAgLy8gU3RhdGljIG1hc2tcbiAgJCgnaW5wdXRbdHlwZT1cInRlbFwiXScpLmlucHV0bWFzayh7XG4gICAgICAnbWFzayc6ICcrNyAoOTk5KSA5OTktOTktOTknLFxuICAgICAgJ3Nob3dNYXNrT25Ib3Zlcic6IGZhbHNlXG4gIH0pO1xuXG4gIC8vIE1vZGFsXG4gICQoXCJbZGF0YS1tb2RhbF1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgkKHRoaXMpLmRhdGEoXCJtb2RhbFwiKSkubW9kYWwoe1xuICAgICAgZmFkZUR1cmF0aW9uOiAzMDBcbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICBcblxufSk7Il19
