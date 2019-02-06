/*document.addEventListener("DOMContentLoaded",function (event) {
	
	document.querySelector("button").addEventListener("click", function () {
	

		$ajaxUtils.sendGetRequest("data/name.txt", function (request) {
			var name = request.responseText;
				document.querySelector("#content").innerHTML= "<h2> Hello " + name + "!";
		});
	
	});	
}

);
*/

document.addEventListener("DOMContentLoaded",function (event) {
	
	document.querySelector("button").addEventListener("click", function () {
	

		$ajaxUtils.sendGetRequest("data/info.json", function (res) {
			console.log(res.firstName);
			var message = "Name: " + res.firstName + " " + res.lastName + "\n" +
							"Profession: " + res.rofession ;
				document.querySelector("#content").innerHTML= "<h2>" + message + "</h2>";
		});
	
	});	
}

);