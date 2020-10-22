$(document).ready(function () {
  

  // Navbar changed when scroll
  var nav = $('nav');
  var navheight = nav.outerHeight();

  $(window).scroll(function () { 
    var top = window.scrollY;

    if (top > 0) {
      $(nav).addClass('nav-changed');
    } else {
      $(nav).removeClass('nav-changed');
    }
  });


   // for Changed paragraph animation used Type Js
   var typed = new Typed('#moved', {
    strings: [
      "websites",
      "softwares",
      "apps",
      ],
    typeSpeed: 100, 
    loop: true,
    backDelay: 1100,
    backSpeed: 60,
    smartBackspace: true 
  });

});