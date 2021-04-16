//sass-painter - 16/04/2021
// Author: Lore
/*$(document).ready(function () {

});*/
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
	document.querySelectorAll('*'),
	function(el) {
		if (el.offsetWidth > docWidth) {
			console.log(el);
		}
	}
);