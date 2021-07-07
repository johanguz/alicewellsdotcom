$('.main').imagesLoaded().always(function() {

  $('.img-responsive').each(function() {
    var marginLeft = $(this).css('margin-left');
    $(this).css('margin-top', marginLeft);
    $(this).css('margin-bottom', marginLeft);
  });

});
