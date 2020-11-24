$(document).ready(function(){
  $('.carousel').carousel();
});

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

function carousel_move(){
  $('.carousel').carousel('next', 1);
}

function carousel_recognition(id) {
  return 'a[href="#' + id + '"]'
}

setInterval(carousel_move, 5000)
