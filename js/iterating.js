(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    // TODO: Create a log statement that will log the number of elements in the names array.

    // TODO: Create log statements that will print each of the names array elements individually.
})();


// declare and initialize array


// declare and initialize array

//This is the code for the array exercises// 
//var names = ['John', 'Jacob', 'Jinglheimer', 'Smith']
//console.log('There are' + ' ' + (names.length) + ' ' + 'names in the array'); 
//console.log('The first name is: ' + names[0]);
//console.log('The second name is: ' + names[1]);
//console.log('The third name is: ' + names[2]);
//console.log('The fourth name is: ' + names[3]);




//Iterating exercises here//

var names = ['John', 'Jacob', 'Jinglheimer', 'Smith']

console.log('There are' + ' ' + (names.length) + ' ' + 'names in the array'); 

for (var i = 0; i < names.length; i++) {
    console.log('The name at index:' + ' ' + i + ' ' + 'is' + ' ' + names[i]); 

    } 

    
    names.forEach(function (element, index, array) {

        console.log('The shape at index' + index + 'is:' + element);
        
    });