var schoolname = 'template'
var today = new Date();
var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var time = months[today.getMonth() + 1] + ' ' + today.getDate() + ', ' + today.getFullYear()

$(document).ready(function(){
  $('.parallax').parallax();
});

$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});

$(document).ready(function(){
   $('select').formSelect();
 });

 $(document).ready(function(){
    $('.modal').modal();
  });

var scrollUp = document.getElementById("top");
scrollUp.addEventListener("click", function(){
  window.scrollTo(0,0);
})

var scrollDown = document.getElementById("bottom");
scrollDown.addEventListener("click", function(){
  var height = window.innerHeight
  window.scrollTo(0, height)
})

function bodyChange(){
  var select = document.getElementById('subjects')
  var bodyAdditons = []
  var bodyAdditons = ['no u',
    'I would like to join Iteam at ' + schoolname + '. ',
    'I would like to learn more about Iteam, and have potential interest. ',
    '\n \n \n --This email was sent with automatic additions at ' + time + '. '
  ]
  for (var i=0; i<4; i++) //the loop loops for all options; increase the number of options, increase this amount.
  {
      var childOption = select.getElementsByTagName('option')[i];
      if (childOption.selected == true) {
        document.getElementById('mailto').href += bodyAdditons[i];
    }
  }
}
document.getElementById('mailto').addEventListener('click', bodyChange())
document.getElementById('date3').innerHTML = time

function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('demo').innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "ajax_info.txt", true);
	xhttp.send();
}

$('#ajax').click(loadDoc())
