// DOM MANIPULATION
//console.log(document.getElementById('title'));

// function sayhello(event) {
// 	console.log(this);
// 	this.textContent= "Said it!"
// 	var name=
// 		document.getElementById("name").value;
// 	var message = "<h2>Hello " + name + "!</h2>"
	
// 	//document.getElementById("content").textContent = message; 	
// 	document.getElementById("content").innerHTML = message;

// 	if (name === "khurram") {
// 		var title = document.querySelector("#title").textContent;
// 		title = title + " Lead Engineer :D"

// 		document.querySelector("#title").textContent = title;
// 	}
// }

// document.querySelector("button").addEventListener("click", sayhello);

document.addEventListener("DOMContentLoaded", 
function (event) {
	function sayhello(event) {
	console.log(event);
	this.textContent= "Said it!"
	var name=
		document.getElementById("name").value;
	var message = "<h2>Hello " + name + "!</h2>"
	
	//document.getElementById("content").textContent = message; 	
	document.getElementById("content").innerHTML = message;

	if (name === "khurram") {
		var title = document.querySelector("#title").textContent;
		title = title + " Lead Engineer :D"

		document.querySelector("#title").textContent = title;
	}
}

document.querySelector("button").addEventListener("click", sayhello);

}
	);