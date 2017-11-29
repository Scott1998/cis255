// When the user scrolls down 20px from the top of the document, show the button
	 window.onscroll = function() {scrollFunction()};
	 
	 function scrollFunction() {
	 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	 		document.getElementById("myBtn").style.display = "block";
	 	} else {
	 		document.getElementById("myBtn").style.display = "none";
	 	}
	 }
	 
	 // When the user clicks on the button, scroll to the top of the document
	 function topFunction() {
	 	document.body.scrollTop = 0;
	 	document.documentElement.scrollTop = 0;
	 }
	 
 function bottomFunction() {
	// code from: https://stackoverflow.com/questions/41179264/how-to-find-the-height-of-the-entire-webpage
	var pageHeight = 0;

	function findHighestNode(nodesList) {
		for (var i = nodesList.length - 1; i >= 0; i--) {
			if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
				var elHeight = Math.max(nodesList[i].scrollHeight, nodesList[i].clientHeight);
				pageHeight = Math.max(elHeight, pageHeight);
			}
			if (nodesList[i].childNodes.length) findHighestNode(nodesList[i].childNodes);
			}
		}

	findHighestNode(document.documentElement.childNodes);
		
	window.scrollTo(0,pageHeight);
}

function showSequence(){
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}
 
 function calcTuition(){
	 var crHr = document.getElementById("crHours").value;
	 document.getElementById("tuitionResult").innerHTML = "$" + (crHr * 327.3);
 }
 
 function back(){
	 window.history.back();
 }
 
	  