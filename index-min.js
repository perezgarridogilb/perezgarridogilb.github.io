// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

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

  // function calculateVh() {
  //   var vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', vh + 'px');
  // }
  
  // // // Initial calculation
  // // calculateVh();
  
  // // // Re-calculate on resize
  // // window.addEventListener('resize', calculateVh);
  
  // // // Re-calculate on device orientation change
  // // window.addEventListener('orientationchange', calculateVh);