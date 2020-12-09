// Carousel Implementation
$(document).ready(function(){
  $('.carousel').carousel();
});

// Standard Implementation
// document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.carousel');
//    var instances = M.Carousel.init(elems, options);
//  });

function carousel_move(){
  $('.carousel').carousel('next', 1);
};
setInterval(carousel_move, 5000);

$(document).ready(function(){
  $('.dropdown-trigger').dropdown();
})
