var schoolname = 'template'
var today = new Date();
var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var time = months[today.getMonth() + 1] + ' ' + today.getDate() + ', ' + today.getFullYear()

$(document).ready(function(){
  $('.parallax').parallax();
});

document.getElementById('date3').innerHTML = time

$(document).ready(function(){
   $('select').formSelect();
 });

function bodyChange(){
  var select = document.getElementById('subjects')
  var bodyAdditons = []
  var bodyAdditons = ['\n \n \n --This email was sent with automatic additions at ' + time + '.',
    'I would like to join Iteam at ' + schoolname + '. ',
    'I would like to learn more about Iteam, and have potential interest.'

  ]
  for (var i=0; i<4; i++) //the loop loops for all options; increase the number of options, increase this amount.
  {
      var childOption = select.getElementsByTagName('option')[i];
      if (childOption.selected == true) {
        document.getElementById('mailto').href += bodyAdditons[i];
        console.log(bodyAdditons[i])
    }
  }
}
document.getElementById('mailto').addEventListener('click', bodyChange())

var scrollButton = document.getElementById("scrollTop");
scrollButton.addEventListener("click", function(){
  window.scrollTo(0,0);
})
