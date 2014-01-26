/*
		Laurie Shuck
		January 30, 2014
		Conditionals Worksheet
*/

//Circumference 

//This variable holds the radius of a circle
var radius = 2;

//This variable holds the value of pi
var pi = Math.PI;

//This variable holds the result of the function calcCircumference
var circumference = calcCircumference(radius, pi);

//This function will calculate the circumference of a circle
function calcCircumference(radius, pi){
	
	//This will return the answer of radius times 2 times pi
	return radius * 2 * pi;
}

//The extra console.logs are for my benefit to test the code
/*
console.log(radius);
console.log(pi);
*/
console.log("The circumference of the circle is " + circumference + ".");

//Stung!!

//This variable will hold the animal's weight in pounds
var animalWeight = 35;

//This variable holds the bee stings per pound that would kill the animal
var beeStings = 8.666666667; 

//This variable holds the calc info
var badOutcome = calcStings(animalWeight, beeStings);

//This function will calculate animalWeight times beeStings to see how many bee stings will kill the animal
function calcStings(animalWeight, beeStings){
	  return animalWeight * beeStings;
}


//The following console.logs are for my benefit to test the code
/*
console.log(animalWeight);
console.log(beeStings);
*/
console.log("It takes " + badOutcome + " bee stings to kill this animal.");









