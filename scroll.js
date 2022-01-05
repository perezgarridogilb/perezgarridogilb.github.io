window.addEventListener("scroll", function(){
var header = document.getElementById("header");
var nav = document.getElementById("ideee").offsetTop;
    header.classList.toggle("abajo",window.pageYOffset > nav);
})