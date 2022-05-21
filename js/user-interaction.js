"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

												
	// var response = prompt('What is your name?');{	
	//This did not work 			
	//('' || ' ') ? console.log('Please provide your name')		
	//} //

var username = '';


while (username === '') {

	username = prompt('What is your name?')

}


console.log(username);




// TODO: Show an alert message that welcomes the user based on their input.

alert('Welcome' + ' ' + username + '!');

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.



var response = prompt('Do you like pizza?'); {

while (response === '') {

	response = prompt('Do you like pizza?')
}

console.log(response);

if(response == 'yes') {

	alert('Me too!')

}else {
	
	alert('There are no words...')

}
}


//this is the example set forth in the video//
// 											//


// var username = '';


//while (username === '') {

	//username = prompt('What is your name?')

//}

//console.log(username);

//alert('Welcome' + ' ' + username + '!');

//var response = confirm('Do you like pizza?'); {

//if(response) {

	//alert('Me too!')

//} else {
	
	//alert('There are no words...')

//}
//}





													
