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
});
