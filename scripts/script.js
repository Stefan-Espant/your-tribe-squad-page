$('.ovals .oval').each(function() {
    var delay = 0,
    step = 60 / $(this).find('.carousel__item').length;
    $(this).find('.carousel__item').each(function() {
      $(this).css('animation-delay', -delay + "s");
      delay += step;
    })
  })

  