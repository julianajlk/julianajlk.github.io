
// button click here
var button = document.getElementById("clickhere"),
  count = 0;
button.onclick = function() {
  count = count + 1;
  button.innerHTML = "&#9825;&nbsp;" + count;
};


// scrolling website
var speed = 1000;

$('nav a').click(function (event) {  
  var target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(target).offset().top
   }, speed);
  event.preventDefault();
});



