document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

var main-carousel = M.Carousel.getInstance('.main-carousel');

var time = 1;

var main-carousel = setInterval(function() {
   if (time <= 3) {
      main-carousel.next(1);
      time++;
   }
   else {
      clearInterval(interval);
   }
}, 5000);
