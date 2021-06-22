/* function store() {
var outputElement = document.getElementById("myOutput").value;
window.localStorage.myitems = outputElement.innerHTML;
}

function getValues() {
  var storedValues = window.localStorage.myitems;
  var outputElement = document.getElementById("myOutput").value;
  if(!storedValues) {
    outputElement.innerHTML = '<li>Make a to do list</li>'+
    '<li>Check off first thing on the to do list</li>'+
    '<li>Realize you have already accomplished 2 things in the list</li>'+
    '<li>Reward yourself with a nap</li>';
}
else {
outputElement.innerHTML = storedValues;
}
}

*/



var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
} 

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.parentNode.removeChild(div);
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



function valeur() {
  var li = document.createElement("li");
var inputValue = document.getElementById("myOutput").value;
 var t = document.createTextNode(inputValue);


 li.appendChild(t);

 if(inputValue === '') {
     alert("Vous devez remplir le champ");
 } else {
     document.getElementById("myUL").appendChild(li);
 } document.getElementById("myOutput").value = "";

 var span = document.createElement("SPAN");
 var txt = document.createTextNode("\u00D7");
 span.className = "close";
 span.appendChild(txt);
 li.appendChild(span);


 for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.parentNode.removeChild(div);
    }
  }
// store();
}


// getValues();