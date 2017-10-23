//document.body.style = "background-color: yellow;"
//document.getElementById("h1").innerHTML = "This header is h1";

var a = document.createElement("a");
var b = document.createTextNode("My link");
a.setAttribute("href", "#");
a.append(b);
document.body.appendChild(a);

var h = document.createElement("h1");
var c = document.createTextNode("My header");
h.append(c);
document.body.appendChild(h);

var p1= document.createElement("p");
var d = document.createTextNode("My paragraph");
p1.append(d);
document.body.appendChild(p1);

var t = document.createElement("title");
var e = document.createTextNode("My title");
t.append(e);
document.head.appendChild(t);

document.getElementById("h1").onclick = function(){document.getElementById("h1").innerHTML = document.URL;}

document.getElementById("input1").onkeyup = 
function(){
	var s = document.getElementById("input1").value;
	var result = "";
	for(var i=0; i<s.length;i++){
		result += (s[i] + ".");
	}
	
	document.getElementById(span1).innerHTML = result;
}






