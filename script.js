$(document).ready(function(){
    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 3000, // Adjust the speed (in milliseconds) as needed
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">&#9665;</button>',
      nextArrow: '<button type="button" class="slick-next">&#9655;</button>'
    });
  });
  