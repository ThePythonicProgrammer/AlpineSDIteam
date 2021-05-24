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

//function bodyChange(){
//  var select = document.getElementById('subjects')
//  var bodyAdditons = []
//  var bodyAdditons = ['no u',
//    'I would like to join Iteam at ' + schoolname + '. ',
//    'I would like to learn more about Iteam, and have potential interest. ',
//    '\n \n \n --This email was sent with automatic additions at ' + time + '. '
//  ]
//  for (var i=0; i<4; i++) //the loop loops for all options; increase the number of options, increase this amount.
//  {
//      var childOption = select.getElementsByTagName('option')[i];
//     if (childOption.selected == true) {
//      document.getElementById('mailto').href += bodyAdditons[i];
//    }
//  }
//}
//document.getElementById('mailto').addEventListener('click', bodyChange())
//document.getElementById('date3').innerHTML = time


// DO NOT MESS WITH THIS SECTION IF YOU DO NOT KNOW WHAT YOU ARE DOING!! IF THIS GETS BROKEN, MOST OF THE CONTENT ON THE SUPPORTING PAGE GETS BROKEN!!! SAME GOES WITH THE SUPPORTING .JSON FILE!!!!!
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (this.readyState ==4 && this.status == 200){
		var pageObj = JSON.parse(this.responseText);
		document.getElementsByClassName('primaryColor').classList.add(pageObj.primaryColor);
		document.getElementsByClassName('accentColor').classList.add(pageObj.accentColor);
		document.getElementsByClassName('accentTextColor').classList.add(pageObj.accentTextColor);
		
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

		for (i in pageObj.content){
			var row = pageObj.content[i]
			for (j in row){
				var item = row[j]
				var row = document.createElement('div')
				row.classList = "row"
				document.getElementById('section').appendChild(row)

				var col = document.createElement('div')
				if (item.size != ""){
					var colClasses = item.size.split(' ')
					for (k in colClasses){
						col.classList.add(colClasses[k]);
					}
				}
				row.appendChild(col);
				
				if (item.type == "card"){
					var card = document.createElement('div');
					card.className = pageObj.accentColor 
					card.classList.add('card', 'darken-1');
					col.appendChild(card);
					
					if (item.img != ""){
						var cardImage = document.createElement('div')
						cardImage.classList.add('card-image')
						card.appendChild(cardImage);
						
						var image = document.createElement('img')
						image.src = item.img
						cardImage.appendChild(image);

						var cardTitle = document.createElement('span');
						cardTitle.classList.add('card-title');
						cardTitle.innerHTML = item.title
						cardImage.appendChild(cardTitle);
					} else {

						var cardContent = document.createElement('div');
						cardContent.classList.add('card-content');
						cardContent.classList += pageObj.accentTextColor
						card.appendChild(cardContent);
					
						var cardTitle = document.createElement('span');
						cardTitle.classList.add('card-title');
						cardTitle.innerHTML = item.title
						cardContent.appendChild(cardTitle);

					}

					var cardText = document.createElement('p');
					cardText.innerHTML = item.text
					cardContent.appendChild(cardText);

					var cardAction = document.createElement('div');
					cardAction.classList.add('card-action');
					card.appendChild(cardAction);
					
					if (item.link != ""){
						var cardLink = document.createElement('a');
						cardLink.innerHTML = item.linkText 
						cardLink.href = item.link
					}
				} else {
					try {
						var obj = document.createElement(item.type);
						objClasses = item.classes.split(' ');
						for (k in objClasses) {
							col.classList.add(colClasses(k));
						}
					} catch (error) {
						console.error(error);
					}
				}
			}
		}
	}
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();
