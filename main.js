// Carousel Implementation
document.addEventListener('DOMContentLoaded', function() {
  var carouselselms = document.querySelectorAll('.carousel');
  var carousels = M.Carousel.init(carouselselems, options);
});

// Scrollspy Implementation
document.addEventListener('DOMContentLoaded', function() {
    var scrollspyelms = document.querySelectorAll('.scrollspy');
    var scrollspy = M.ScrollSpy.init(scrollspyelems, options);
  });

function carousel_move(){
  var active = scrollspy.getActiveElement()
  carousels.next(1)
}

setInterval(carousel_move, 5000)
