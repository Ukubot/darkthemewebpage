$(function() {

  $('.nav-handle').click(function(){
    $('.sidemenu-li').toggleClass("active");
  });

  $(".nav-handle").click(function() {
    $(this).toggleClass("open");
  });

  $(".nav-handle").click(function() {
    $(".site-mask").toggleClass("active");
  });

  $('#sth-div').show(1000);
  $('#sth1-div').hide();
  $('#sth2-div').hide();
  $('#sth3-div').hide();

  $('#sth').click(function() {
    $('#sth-div').show(1000);
    $('#sth1-div').hide();
    $('#sth2-div').hide();
    $('#sth3-div').hide();
  });

  $('#sth1').click(function() {
    $('#sth1-div').show();
    $('#sth-div').hide();
    $('#sth2-div').hide();
    $('#sth3-div').hide();
  });

  $('#sth2').click(function() {
    $('#sth2-div').show();
    $('#sth-div').hide();
    $('#sth1-div').hide();
    $('#sth3-div').hide();
  });

  $('#sth3').click(function() {
    $('#sth3-div').show();
    $('#sth-div').hide();
    $('#sth1-div').hide();
    $('#sth2-div').hide();
  });


});
