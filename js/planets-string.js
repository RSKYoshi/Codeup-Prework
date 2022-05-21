(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.

    planetsString.split('|');
    var planetsArray = planetsString.split('|');

    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?

    var myplanets = 'Earth<br>Mars<br>Jupiter';
    console.log(myplanets);
    document.body.innerHTML += myplanets;

    //This is very useful. Now I can customize buttons, actions, etc. on a webpage. 



    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    
       var myplanets = ('<ul> <li>Earth</li> <li>Mars</li> <li>Jupiter</li> </ul>')
       document.body.innerHTML += myplanets;
       console.log(myplanets);



})();



