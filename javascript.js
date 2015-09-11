console.log ("hello world");

/*create a function that doesn't take in a value
get hold fo the para element
change the text value to the current date and time
*/

function update_current_date () {

	var current_date_string = Date().toString();
	var elem = document.getElementById("para");
	elem.innerHTML = current_date_string;
	return ;
}

window.setInterval(update_current_date, 500);



var index = 0;
var classes = ["back_blue", "back_red", "back_green", "back_orange"];

function flashing_colour () {

	document.body.className = classes [index];
	index = index + 1;
	if (index >= classes.length) {
		index = 0;
	}
}

window.setInterval(flashing_colour, 500);



