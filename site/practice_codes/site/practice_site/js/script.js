$(function () {
	$("#navbar-button").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#navbarSupportedContent").collapse('hide');
		}
	});
});

(function (global) {
	
var ub = {};

var homeHTML = "snippets/home-snippet.html";

var insertHTML = function (selector, html) {
	var targetElem = document.querySelector(selector);
	targetElem.innerHTML=html;
};

var showLoading = function (selector) {
	var html = "<div class='text-center'>";
	html += "<img src='images/ajax-loader.gif'></div>";
	insertHTML(selector, html);
};

document.addEventListener("DOMContentLoaded", function (event) {
	showLoading("#main-content");

	$ajaxUtils.sendGetRequest(homeHTML, 
		function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		}, false);
});

global.$ub = ub;

})(window);