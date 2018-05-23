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



//back to top button
$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

var amountScrolled = 300;

$(window).scroll(function() {
  if ($(window).scrollTop() > amountScrolled) {
    $('a.back-to-top').fadeIn('slow');
  } else {
    $('a.back-to-top').fadeOut('slow');
  }
});

$('a.back-to-top, a.simple-back-to-top').click(function() {
  $('body,html').animate({
    scrollTop: 0
  }, 'fast');
  return false;
});


