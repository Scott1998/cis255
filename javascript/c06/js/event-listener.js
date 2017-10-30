
function checkUsername(){
  var elem = this.id;
  var num = elem.substring(elem.length - 1);
  var output = "feedback" + num;
  var elMsg = document.getElementById(output);
  var firstLetter = this.value[0].toUpperCase();
  switch(this.id){
	  case "username1": 
			if (firstLetter == 'A' || firstLetter == 'B' || firstLetter == 'C') {
				elMsg.textContent = '';
			}
			else {
				elMsg.textContent = 'Username must start with A, B, or C';
			}
			break;
	  case "username2":
			if (firstLetter != 'D' && firstLetter != 'E' && firstLetter != 'F' && firstLetter != 'G' && firstLetter != 'H') {
				elMsg.textContent = 'Username must start with D, E, F, G, or H';
			}
			else {
				elMsg.textContent = '';
			}
			break;
	  case "username3":
			if (firstLetter != 'I' && firstLetter != 'J' && firstLetter != 'K' && firstLetter != 'L' && firstLetter != 'M') {
				elMsg.textContent = 'Username must start with I, J, K, L, or M';
			}
			else {
				elMsg.textContent = '';
			}
			break;
			
	  case "username4":
			if (firstLetter != 'N' && firstLetter != 'O' && firstLetter != 'P') {
				elMsg.textContent = 'Username must start with N, O, or P';
			}
			else {
				elMsg.textContent = '';
			}
			break;	
	  case "username5":
			if (firstLetter != 'Q' && firstLetter != 'R' && firstLetter != 'S' && firstLetter != 'T'  && firstLetter != 'U' && firstLetter != 'V' 
				&& firstLetter != 'W' && firstLetter != 'X' && firstLetter != 'Y' && firstLetter != 'Z') {
				elMsg.textContent = 'Username must start with Q, R, S, T, U, V, W, X, Y, or Z';
			}
			else {
				elMsg.textContent = '';
			}
			break;
  }
}


var elUsername1 = document.getElementById('username1');  // Get username input
// When it loses focus call checkUsername()
elUsername1.addEventListener('blur', checkUsername, false);
var elUsername2 = document.getElementById('username2');  // Get username input
// When it loses focus call checkUsername()
elUsername2.addEventListener('blur', checkUsername, false);
var elUsername3 = document.getElementById('username3');  // Get username input
// When it loses focus call checkUsername()
elUsername3.addEventListener('blur', checkUsername, false);
var elUsername4 = document.getElementById('username4');  // Get username input
// When it loses focus call checkUsername()
elUsername4.addEventListener('blur', checkUsername, false);
var elUsername5 = document.getElementById('username5');  // Get username input
// When it loses focus call checkUsername()
elUsername5.addEventListener('blur', checkUsername, false);

