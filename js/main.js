// Carousel Implementation
function initCarousel(){
	var carousel = document.getElementById("main-carousel")

  var fixedItem = document.createElement("div");
  fixedItem.classList.add("carousel-fixed-item", "center")
  fixedItem.id = "fixedItem"
  carousel.appendChild(fixedItem);

  var fixedButton = document.createElement("a");
  fixedButton.classList.add("btn", "waves-effect", "white", "grey-text", "darken-text-2")
  fixedButton.innerHTML = "Join the Discord!"
  fixedButton.href = "http://www.discord.gg/PGMUsbh"
  document.getElementById('fixedItem').appendChild(fixedButton)

  for (var i=1; i<6; i++) { // change the less than to increase the number of items in the carousel
	//carousel.innerHTML = '<a class="carousel-item" href="#1!"><img src="assets/carousel/1.jpg" /></a>\n' //make sure all images are jpg's or else this will break
    var item = document.createElement("a");
    item.id = i
    item.classList += "carousel-item"
    carousel.appendChild(item);

    var img = document.createElement("img");
    img.src = "assets/carousel/"+i+".jpg"
    document.getElementById(i).appendChild(img);
  }
}
initCarousel()

$(document).ready(function(){
  $('.carousel').carousel({
    indicators: true,
  });
});

// Standard Implementation
// document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.carousel');
//    var instances = M.Carousel.init(elems, options);
//  });

// Dropdown Implementation
$(document).ready(function(){
  $('.dropdown-trigger').dropdown();
})

// Collapsible Implementation
$(document).ready(function(){
    $('.collapsible').collapsible();
  });

// Carousel Motion
function carousel_move(){
 $('.carousel').carousel('next', 1);
};
setInterval(carousel_move, 5000);

var scrollButton = document.getElementById("scrollTop");
scrollButton.addEventListener("click", function(){
  window.scrollTo(0,0);
})

// $('.pushpin-header').each(function(){
//   var elm = $(this);
//   var target = $('#' + elm.attr('data-target'));
//   var top = target.offset().top
//   var bottom = target.offset().top + target.outerHeight() - elm.height()
//   elm.pushpin({
//     top: top,
//     bottom: bottom
//   })
// })

// document.addEventListener("DOMContentLoaded", function() {
//   var pushpins = document.querySelectorAll(".pushpin");
//   pushpins.forEach(function(element) {
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     var elemRect = element.getBoundingClientRect();
//     var parentRect = element.parentElement.getBoundingClientRect();
//     var elemTop = scrollTop + elemRect.top;
//
//     var instancePushpin = M.Pushpin.init(element, {
//       top: elemTop,
//       bottom: elemTop + parentRect.height - elemRect.height
//     });
//   })
// });
