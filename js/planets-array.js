

//(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    console.log(planets)
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets.unshift('The Sun'));
    console.log(planets)

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets.push('Pluto'));

    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets.shift());
    console.log(planets)

    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets.push());
    console.log(planets)

    console.log('Finding and logging the index of "Earth" in the planets array.');
    //console.log(planets.indexOf('Earth'))
 //or console.log(planets.indexof

    let index = planets.indexOf('Earth')
    console.log(index);


    console.log("Reversing the order of the planets array.");
    console.log(planets.reverse());

    console.log("Sorting the planets array.");
    console.log(planets.sort());
//})();