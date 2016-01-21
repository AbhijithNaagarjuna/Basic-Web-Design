$(document).ready(function(){
  $('#circle1').hide();
  $('#circle2').hide();
  $('#circle3').hide();
  $('#circle4').hide();
  $('#title').hide();
  $('#tagline').hide();
  $('#circle1').fadeIn(2000);
  $('#circle2').fadeIn(3000);
  $('#circle3').fadeIn(4000);
  $('#circle4').fadeIn(5000);
  $('#title').fadeIn(6000);
  $('#tagline').fadeIn(10000);
  
});

$(document).ready(function () {
  setTimeout(function () {
    window.location.href = "inquizmain.html"
  }, 5000);
});
