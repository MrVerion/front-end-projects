

var popup = document.getElementsByClassName('popup')[0];
var open = document.getElementsByClassName('button')[0];
var close = document.getElementsByClassName('button')[1];


open.onclick = function(){

  popup.style.display = "block";
}

close.onclick = function(){

popup.style.display = "none";

}
