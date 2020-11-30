// Carousel Implementation
document.addEventListener('DOMContentLoaded', function() {
  var elms = document.querySelectorAll('.carousel');
  var carousel = M.Carousel.init(elems, options);
});

function carousel_move(){
  carousel.next(1)
}
setInterval(carousel_move, 5000)
