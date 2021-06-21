
function valeur() {
var inputValue = document.getElementById("myOutput").value;
 var li = document.createElement("li");
 var t = document.createTextNode(inputValue);

 li.appendChild(t);

 if(inputValue === "") {
     alert("Vous devez remplir le champ");
 } else {
     document.getElementById("myUL").appendChild(li);
 }
};