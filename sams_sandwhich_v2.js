// JavaScript Document order
var database = firebase.database(); // creating the link to your database 
var orderRef = database.ref( 'order' ); //creates a reference point to firebase, order node
function loopForm(form) {
	alert("Check your order please"); //test alert 
	var sandwhichOrder = []; //defines an empty list 
	for (var i = 0; i < form.elements.length; i++) { // for loop through the form 
		if (form.elements[i].type == "radio") {
			if (form.elements[i].checked) {
				sandwhichOrder.push(form.elements[i].value);
				alert(sandwhichOrder);
			}
		}
		if (form.elements[i].type == "checkbox") {
			if (form.elements[i].checked) {
				sandwhichOrder.push(form.elements[i].value + '');
				alert(sandwhichOrder); //test alert 
			}
			
		}
			
		}
		checkInputs(sandwhichOrder);
		//once the for loop has gone through each element in the form 
		//it will output the list using the DOM
}
	function checkInputs(sandwhichOrder){
		var customer_name = customers_name.value;
		var phone_number = cellphone.value;
		alert("in the check name function");
		if (document.getElementById("customers_name").validity.patternMismatch){//checks validity
			alert('Please enter a vaild customer name');//if invilaid or empty prints this error message 
			return;//forces them to fix their error
		
		}
		if (document.getElementById("cellphone").validity.patternMismatch){//VALIDITY
			alert('Please enter a vaild phone number'); //if invilaid or empty prints this error message
			return;//forces them to fix their error
		
		}else{
			alert( customer_name + phone_number );
			document.getElementById("nameOutput").innerHTML = "Name: " + customer_name + " " + "Phone number： " + phone_number ;
			document.getElementById("sandwhichOutput").innerHTML = "sandwhich order: "+ sandwhichOrder;
			sendData(customer_name,phone_number,sandwhichOrder);
			//If  there is no errors detected by the above code or the user fixers them then this else staement runs and the pushfunction which will push to firebase 
		}
	}
	function sendData(customer_name,phone_number,sandwhichOrder){
		var data = { //JSON file
			sandwhich: sandwhichOrder,
			name: customer_name,
			phone: phone_number
		}

	orderRef.push(data); //pushing the data to firebase 
	alert("data has been pushed, end of the program");
	document.getElementById('confirmOverlay').style.height = "100%"; //display the confirm overlay
	setTimeout(function(){ //sets a timer of 3 seconds and wil then refresh the page
			   location.reload();
			   }, 3000);
	}
	submit_button.disable;
