document.getElementById("demo").onmouseover = function() {mouseOver()};
document.getElementById("demo").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("demo").innerText= "Mouse In";
  document.getElementById("demo").style.color = "#ff0000";
}

function mouseOut() {
  document.getElementById("demo").innerText = "Mouse Out";
  document.getElementById("demo").style.color = "magenta";
  
}