// SCROLL TO TOP
//show button at 30px scroll
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("scrollButton").style.display = "block";
  } else {
    document.getElementById("scrollButton").style.display = "none";
  }
}
//scroll to the top of the document onclick
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//SCROLLING WEBSITE FROM NAVBAR
var speed = 1000;

$("nav a").click(function(event) {
  var target = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(target).offset().top
    },
    speed
  );
  event.preventDefault();
});
