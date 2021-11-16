// Question 7 - Create a web app, which you have to create two btns one is start, second is stop, and input text on clicking of start btn the text color should change in every 1 sec and on clicking stop it should stop at a particular color.

var start = document.querySelector("#btnStart");
var stop = document.querySelector("#btnStop");
var doc = document.querySelector("#backGround");


var color = ["red", "blue", "brown", "green","cyan"];
var current = "";
var i = 0;
function change() 
{ interval = setInterval(function(){
  doc.style.backgroundColor = color[i];
  current = color[i];
  i++;
  
  if(i > color.length - 1) {
    i = 0;
  }},1000);
}

function stopchange(){
  clearInterval(interval)
  doc.style.backgroundColor = current;
  console.log(current)
}

start.addEventListener("click",change);
stop.addEventListener("click",stopchange);
