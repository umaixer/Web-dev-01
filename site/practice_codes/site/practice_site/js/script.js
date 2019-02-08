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
var allCategoriesUrl= "http://davids-restaurant.herokuapp.com/categories.json";
var categoriesTitleHtml= "snippets/categories-title-snippet.html";
var categoryHtml = "snippets/category-snippet.html";

var insertHTML = function (selector, html) {
	var targetElem = document.querySelector(selector);
	targetElem.innerHTML=html;
};

var showLoading = function (selector) {
	var html = "<div class='text-center'>";
	html += "<img src='images/ajax-loader.gif'></div>";
	insertHTML(selector, html);
};

var inserProperty = function (string, propName, propValue) {
	var propToReplace = "{{" + propName + "}}";
	string = string.replace(new RegExp(propToReplace, "g"),propValue);
	return string;
};

document.addEventListener("DOMContentLoaded", function (event) {
	showLoading("#main-content");

	$ajaxUtils.sendGetRequest(homeHTML, 
		function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		}, false);
});

ub.loadMenuCategories=function () {
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowCategoriesHTML);

};

function buildAndShowCategoriesHTML(categories) {
	$ajaxUtils.sendGetRequest(categoriesTitleHtml, function (categoriesTitleHtml) {
		$ajaxUtils.sendGetRequest(categoryHtml, function (categoryHtml) {
			var categoriesViewHTML = buildcategoriesViewHTML
			(categories,categoriesTitleHtml,categoryHtml);
			insertHTML("main-content",categoriesViewHTML);
		}, false);
	}, false);
}

function buildcategoriesViewHTML(categories,categoriesTitleHtml,categoryHtml) {
	var finalHTML= categoriesTitleHtml;
	finalHTML += "<section class='row'>";

	for (var i = 0; i < categories.length; i++) {

		var html = categoryHtml;
		var name = "" + categories[i].name;
		var short_name = categories[i].short_name;

		html= insertHTML(html,"name", name);
		html= insertHTML(html,"short_name", short_name);
		finalHTML += html;
	}
	finalHTML += "</section>";
	return finalHTML;
}

global.$ub = ub;

})(window);