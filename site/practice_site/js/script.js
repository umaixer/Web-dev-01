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
var allCategoriesUrl= "https://davids-restaurant.herokuapp.com/categories.json";
var categoriesTitleHtml= "snippets/categories-title-snippet.html";
var categoryHtml = "snippets/category-snippet.html";
var menuItemsUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
var menuItemsTitleHtml = "snippets/menu-items-title.html";
var menuItemHtml = "snippets/menu-item.html";


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

ub.loadMenuItems=function (categoryShort) {
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(menuItemsUrl + categoryShort, 
		buildAndShowMenuItemsHTML);

};

function buildAndShowCategoriesHTML(categories) {
	$ajaxUtils.sendGetRequest(categoriesTitleHtml, function (categoriesTitleHtml) {
		$ajaxUtils.sendGetRequest(categoryHtml, function (categoryHtml) {
			var categoriesViewHTML = buildcategoriesViewHTML
			(categories,categoriesTitleHtml,categoryHtml);
			insertHTML("#main-content",categoriesViewHTML);
		}, false);
	}, false);
}

function buildcategoriesViewHTML(categories,categoriesTitleHtml,
	categoryHtml) {
	var finalHTML= categoriesTitleHtml;
	finalHTML += "<section class='row'>";

	for (var i = 0; i < categories.length; i++) {

		var html = categoryHtml;
		var name = "" + categories[i].name;
		var short_name = categories[i].short_name;

		html= inserProperty(html,"name", name);
		html= inserProperty(html,"short_name", short_name);
		finalHTML += html;
	}
	finalHTML += "</section>";
	return finalHTML;
}

function buildAndShowMenuItemsHTML (categoryMenuItems){
	$ajaxUtils.sendGetRequest(menuItemsTitleHtml, 
		function (menuItemsTitleHtml) {
		$ajaxUtils.sendGetRequest(menuItemHtml, 
			function (menuItemHtml) {
			var menuItemsViewHTML = buildMenuItemsViewHTML
			(categoryMenuItems,menuItemsTitleHtml,menuItemHtml);
			insertHTML("#main-content",menuItemsViewHTML);
		}, false);
	}, false);
}

function buildMenuItemsViewHTML (categoryMenuItems,menuItemsTitleHtml,
								menuItemHtml) {
	
	menuItemsTitleHtml = inserProperty(menuItemsTitleHtml,"name", 
								categoryMenuItems.category.name);
	menuItemsTitleHtml = inserProperty(menuItemsTitleHtml,
								"special_instructions", 
					categoryMenuItems.category.special_instructions);

	var finalHTML =menuItemsTitleHtml;
	finalHTML += "<section class='row'>";

	var menuItems = categoryMenuItems.menu_items;
	var catShortName = categoryMenuItems.category.short_name;

	for (var i = 0; i < menuItems.length; i++) {

		var html = menuItemHtml;
		html = inserProperty(html, "short_name", 
			menuItems[i].short_name);
		html = inserProperty(html, "catShortName", catShortName);
		html = insertItemPrice(html, "price_small", 
			menuItems[i].price_small);
		html = insertItemPortionName(html, "small_portion_name", 
			menuItems[i].small_portion_name);
		html = insertItemPrice(html, "price_large", 
			menuItems[i].price_large);
		html = insertItemPortionName(html, "large_portion_name",
			menuItems[i].large_portion_name);
		html = inserProperty(html, "name", menuItems[i].name);
		html = inserProperty(html, "description", 
			menuItems[i].description);



		finalHTML += html;

	}

	finalHTML += "</section>";

	return finalHTML;

}

function insertItemPrice (html, pricePropName, priceValue) {
	
	if (!priceValue) {
		return inserProperty(html, pricePropName, "");
	}

	priceValue = "$" +priceValue.toFixed(2);
	html = inserProperty (html, pricePropName, priceValue);
	return html;
}

function insertItemPortionName(html,
                               portionPropName,
                               portionValue) {
  // If not specified, return original string
  if (!portionValue) {
    return inserProperty(html, portionPropName, "");
  }

  portionValue = "(" + portionValue + ")";
  html = inserProperty(html, portionPropName, portionValue);
  return html;
}



global.$ub = ub;

})(window);