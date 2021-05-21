// Carousel Implementation
function initCarousel(){
	var carousel = $('#main-carousel')
	for (var i=0; i<6; i++) { // change the less than to increase the number of items in the carousel
	//carousel.innerHTML = '<a class="carousel-item" href="#1!"><img src="assets/carousel/1.jpg" /></a>\n' //make sure all images are jpg's or else this will break
  var item = document.createElement("a");
  item.id = i
  item.classList += "carousel-item"
  document.getElementById("main-carousel").appendChild(item);

  var img = document.createElement("img");
  img.src = "assets/carousel/"+i+".jpg"
  document.getElementById(i).appendChild(img);
  }
}
initCarousel()

//$(document).ready(function(){
  //$('.carousel').carousel();
//});

// Standard Implementation
// document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.carousel');
//    var instances = M.Carousel.init(elems, options);
//  });

// Dropdown Implementation
$(document).ready(function(){
  $('.dropdown-trigger').dropdown();
})

// Carousel Images


// Carousel Motion
//function carousel_move(){
//  $('.carousel').carousel('next', 1);
//};
//setInterval(carousel_move, 5000);
