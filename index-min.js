$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

window.onload = function () {
    $('#preloader').delay(100).fadeOut();
    $('body').removeClass('hidden');
}

window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    var nav = document.getElementById("ideee").offsetTop;
    let toggler = document.getElementById('toggler');
    if (toggler.ariaExpanded != "true") {
        $("nav").removeClass("color");
        header.classList.toggle("abajo", window.pageYOffset > nav);
    }
})

$(function () {
    $(document).click(function (event) {
        $('.navbar-collapse').collapse('hide');
    });
});

$(".navbar-toggler").click(function () {
    $("nav").addClass("color");
})

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


ScrollReveal().reveal('.titles', { delay: 515 });
ScrollReveal().reveal('.about', { delay: 585 });

ScrollReveal().reveal('.skills', { delay: 635 });
ScrollReveal().reveal('.text-center', { delay: 685 });

ScrollReveal().reveal('.subtitle', { delay: 585 });