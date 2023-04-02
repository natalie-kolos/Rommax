$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar-custom").css("background", "transparent");
    } else {
      $(".navbar-custom").css("background", "#333");
    }
  });
});
