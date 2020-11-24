$(document).ready(function(){
  $('.carousel').carousel();
});

function carousel_move(){
  $('.carousel').carousel('next', 1);
}

setInterval(carousel_move, 5000)
