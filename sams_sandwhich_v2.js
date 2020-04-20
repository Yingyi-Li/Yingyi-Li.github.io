// JavaScript Document order
var database = firebase.database(); // creating the link to your database 
var orderRef = database.ref( 'order' ); //creates a reference point to firebase, order node
function loopForm(form) {
	alert("Check your order please"); //test alert 
	var sandwichOrder = []; //defines an empty list 
	for (var i = 0; i < form.elements.length; i++) { // for loop through the form 
		if (form.elements[i].type == "radio") {
			if (form.elements[i].checked) {
				sandwichOrder.push(form.elements[i].value);
				alert(sandwichOrder); //test alert 
			}
		}
		if (form.elements[i].type == "checkbox") {
			if (form.elements[i].checked) {
				sandwichOrder.push(form.elements[i].value + '');
				alert(sandwichOrder); //test alert 
			}
		}
		//once the for loop has gone through each element in the form 
		//it will output the list using the DOM
		var customer_name = customer_name.value;
		var phone_number = phone_number.value;
		alert(customer_name + phone_number);
		document.getElementById("radioResults").innerHTML = customer_name + phone_number + sandwichOrder;
		var data = { //JSON file
			sandwhich: sandwichOrder,
			name: customer_name,
			phone: phone_number
		}
	}
	orderRef.push(data); //pushing the data to firebase 
	alert("data has been pushed")
}