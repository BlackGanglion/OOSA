$(document).ready(function() {
  $('.img-nav').on('mouseover', function(){
    $(this).animate({
      width: "29.5%"
    }, "fast");
    $(this).siblings().animate({
      width: "17%"
    }, "fast");
  });

  $('.img-nav').on('mouseout', function(){
    $('.img-nav').animate({
      width: "19.5%"
    }, "fast");
  });
});
