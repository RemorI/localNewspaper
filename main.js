var button = document.getElementById("example-three");
button.addEventListener('click', function(){
	if(button.getAttribute("data-text-swap") == button.innerHTML) {
		button.innerHTML = button.getAttribute("data-text-original");

		document.getElementById('localNotice1').style.color = "black";
		document.getElementById('localNotice1').style.background = "white";

	} else {
		button.setAttribute("data-text-original", button.innerHTML);
		button.innerHTML = button.getAttribute("data-text-swap");

		document.getElementById('localNotice1').style.color = "blue";
		document.getElementById('localNotice1').style.background = "red";

	} 
}, false);
