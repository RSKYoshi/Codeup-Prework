"use strict";


//This is the IIFE version//

(function (){


	var myNameIs = 'Ryan';

	function sayHello(name) {

	console.log('Hello from' + ' ' + name )

	}	

	sayHello(myNameIs);

	var random = Math.floor((Math.random()*100)+1);

	function isOdd(number) {
	(number % 2 ===1) ? console.log(number + ' ' + 'is odd') : console.log(number + ' ' + 'is even');

	}

	isOdd(random);

})()