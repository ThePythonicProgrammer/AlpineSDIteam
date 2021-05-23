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


// DO NOT MESS WITH THIS SECTION IF YOU DO NOT KNOW WHAT YOU ARE DOING!! IF THIS GETS BROKEN, MOST OF THE CONTENT ON THE SUPPORTING PAGE GETS BROKEN!!! SAME GOES WITH THE SUPPORTING .JSON FILE!!!!!
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (this.readyState ==4 && this.status == 200){
		var pageObj = JSON.parse(this.responseText);
		document.getElementsByClassName('primaryColor').classList += pageObj.primaryColor;
		document.getElementsByClassName('accentColor').classList += pageObj.accentColor;
		document.getElementsByClassName('accentTextColor').classList += pageObj.accentTextColor;
		
		document.getElementById('parallaximg').src = pageObj.backgroundImage;

		for (i in pageObj.contactOptions){
			var option = document.createElement('option');
			option.value = i
			option.innerHTML = pageObj.contactOptions[i].name
			
			var options = pageObj.contactOptions[i].options.split(' ');
			console.log(options)
			document.getElementById('subjects').appendChild(option)
			for (j in options){
				if (options[j] != ""){
					option.setAttribute(options[j], options[j]);
				}
			}
			
		}
   		$('select').formSelect();

		//for (i in pageObj.content){
		//	var rownum = 'row' + i
		//	var row = 
		//}
	}
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();
