// Carousel Implementation
document.addEventListener('DOMContentLoaded', function() {
  var elms = document.querySelectorAll('.carousel');
  var carousels = M.Carousel.init(elems, options);
});

// Scrollspy Implementation
document.addEventListener('DOMContentLoaded', function() {
    var elms = document.querySelectorAll('.carousel');
    var scrollspy = M.ScrollSpy.init(elems, options);
  });

function carousel_move(){
  carousels.next(1)
}
setInterval(carousel_move, 5000)
