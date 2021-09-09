$(document).ready(function(){
  $(".accordion-btn-1").click(function(){
    var chk = $('#year2018').hasClass('move-top')
    if(!chk){
        $('#year2018').addClass('move-top');
    } else {
        $('#year2018').removeClass('move-top');
    }
    var chk2 = $('#list-item').hasClass('border-on')
    if(!chk2){
        $('#list-item').addClass('border-on');
    }else{
        $('#list-item').removeClass('border-on');
    }
  });
});

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 300) {
      $(".overlay").addClass("overlay-remove");
      $(".hid-box-1").addClass("hid-box-1-top");
      $(".hid-box-2").addClass("hid-box-2-top");
  }
  if (scroll >= 1200) {
    $(".bg-text").addClass("bg-text-full");
    $(".button").addClass("button-full");
    $(".h-ar").addClass("h-ar-full");   
  }
}); 