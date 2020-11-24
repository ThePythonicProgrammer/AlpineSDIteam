$(document).ready(function(){
  $('.carousel').carousel();
});

setInterval(carousel_move, 5000)

function carousel_move(){
  $('.carousel').carousel('next', 1);
  clearInterval()
}
