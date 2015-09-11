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
