// responsive nav

$(".menu").click(function(){
  $(".active").toggle();
});

$(window).resize(function(){
  if(window.innerWidth > 768) {
    $(".menu").removeAttr("style");
  }
});

// button click here
var button = document.getElementById("clickhere"),
  count = 0;
button.onclick = function() {
  count = count + 1;
  button.innerHTML = "&#9825;&nbsp;" + count;
};

var results = document.getElementById('count').innerHTML = count;
function iLoveCode(results) {
  if (results < 2) {
    return "You like code!";
  } else {
    return "You love code!";
  }
}
  

 

// scrolling website
var speed = 1000;

$('nav a').click(function (event) {  
  var target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(target).offset().top
   }, speed);
  event.preventDefault();
});



