// responsive nav

$(".menu").click(function(){
  $(".active").toggle();
});

$(window).resize(function(){
  if(window.innerWidth > 768) {
    $(".menu").removeAttr("style");
  }
});




// fancybox - work
  $(document).ready(function() {
    $(".fancybox").fancybox({
     afterClose:function(){
      $('.hidden').hide();
     }
      });
    $(".fancybox1").fancybox({
     afterClose:function(){
      $('.hidden').hide();
     }
      });
    $(".fancybox2").fancybox({
     afterClose:function(){
      $('.hidden').hide();
     }
      });
    $(".fancybox3").fancybox({
     afterClose:function(){
      $('.hidden').hide();
     }
      });
    $(".fancybox4").fancybox({
     afterClose:function(){
      $('.hidden').hide();
     }
      });
    $(".fancybox5").fancybox({
     afterClose:function(){
      $('.hidden').hide();
     }
      });
  });

  
$('#image-1').click(function() {
    for (var i = 1; i <7; i++) {
      $(this).append('<a class="fancybox hidden" rel="group" href="images/jk-design-case-1-gallery-' + i + '.jpg"></a>')
      }
  });

  $('#image-2').click(function() { //not working
    for (var i = 1; i <7; i++) {
      $(this).append('<a class="fancybox1 hidden" rel="group" href="images/jk-design-case-2-gallery-' + i + '.jpg"></a>')
      }
  });

  $('#image-3').click(function() { //not working
    for (var i = 1; i <7; i++) {
      $(this).append('<a class="fancybox2 hidden" rel="group" href="images/jk-design-case-3-gallery-' + i + '.jpg"></a>')
      }
  });

  $('#image-4').click(function() { //not working
    for (var i = 1; i <7; i++) {
      $(this).append('<a class="fancybox3 hidden" rel="group" href="images/jk-design-case-4-gallery-' + i + '.jpg"></a>')
      }
  });

  $('#image-5').click(function() { //not working
    for (var i = 1; i <6; i++) {
      $(this).append('<a class="fancybox4 hidden" rel="group" href="images/jk-design-case-5-gallery-' + i + '.jpg"></a>')
      }
  });

  $('#image-6').click(function() { //not working
    for (var i = 1; i <7; i++) {
      $(this).append('<a class="fancybox5 hidden" rel="group" href="images/jk-design-case-6-gallery-' + i + '.jpg"></a>')
      }
  });


  // $(document).ready(function() {
  //   $(".fancybox").fancybox({
  //    afterClose:function(){
  //     $('.hidden').hide();
  //    }
  //     });
  //   $("fancybox1").fancybox({
  //    afterClose:function(){
  //     $('.hidden').hide();
  //    }
  //     });
  // });


  // $('#image-1').click(function() {
  //   for (var i = 1; i <6; i++) {
  //     $(this).append('<a class="fancybox hidden" rel="group" href="images/jk-design-case-1-vertical-' + i + '.jpg"></a>')
  //     }
  // });
  
  // $('#image-2').click(function() { //link correct images
  //   for (var i = 1; i <6; i++) {
  //     $(this).append('<a class="fancybox hidden" rel="group" href="images/jk-design-case-1-vertical-' + i + '.jpg"></a>')
  //     }
  // });


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


