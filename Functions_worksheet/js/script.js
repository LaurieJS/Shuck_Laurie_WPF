/*
		Laurie Shuck
		January 30, 2014
		Conditionals Worksheet
*/

//Circumference 

//This variable will hold the radius of a circle
var radius = 7;

//This variable holds the value of pi
var pi = Math.PI;

//This is the variable that holds the circumference variable
var circumference = calcCircumference(radius, pi);

//This is the function that will calculate the circumference
function calcCircumference(radius, pi){
	return radius * 2 * pi;
}

//The extra console.logs are for my benefit to test the code
/*
console.log(radius);
console.log(pi);
*/
console.log(circumference);