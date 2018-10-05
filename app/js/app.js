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