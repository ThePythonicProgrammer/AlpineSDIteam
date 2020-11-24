// $(document).ready(function(){
//   $('.carousel').carousel();
// });
//
// $(document).ready(function(){
//     $('.scrollspy').scrollSpy();
//   });
//
// function carousel_move(){
//   $('.carousel').carousel('next', 1);
// }
//
// function carousel_recognition(id) {
//   return 'a[href="#' + id + '"]'
// }

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});

function carousel_move(){
  instances.next(1)
}

setInterval(carousel_move, 5000)
