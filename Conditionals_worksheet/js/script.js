/*
	Laurie Shuck
	January 23, 2014
	Conditionals Worksheet
*/

//Stuff Your Face 

//This is the variable for the competitor's weight
var weight = 280;

//This if/else statement will determine if the competitor weighs 250 lbs or more, and print a result to the console

//If competitor's weight is greater than or equal to 250
if(weight >= 250){
	
	//Write to the console if the competitor is greater than 250 lbs
	console.log("The competitor qualifies for the heavyweight division.");
	
}else{
	//If the competitor is less that 250 lbs this will print to the console
	console.log("The competitor needs to gain some weight!");	
}

//Last Chance for Gas (Group 1)

//This code will determine if you have enough gas to make it to the next gas station

//The variable of your car's gas efficiency in MPG
var gasEfficiency = 10;

//This variable holds the amount of gas in the tank in percentage
var tankReading = 0.20;

//This is the variable of the gas tank's capacity
var tankCapacity = 30;

//This will calculate how many miles of gas remaining
var gasCalc = tankCapacity * tankReading * gasEfficiency;

//The following if/else statement will determine if you have enough gas

//If your gas tank has more than 200 gallons of gas
if(gasCalc > 200){
	
	//If true, this statement will print to the console
	console.log("Yes, you can make it without stopping for gas!");
}else{
	
	//If false, this statement will print to the console
	console.log("You only have " + gasCalc + " gallons of gas in your tank, better get gas now while you can!");
}


//Check the Login (Group 2)

//This will determine if a user has the correct username and password

//This variable holds the username entered by the user
var userName = "Ron Paul";

//This variable holds the password entered by the user
var userPass = "president";

//This variable represents the correct username
var actualName = "Ron Paul";

//This variable represents the correct password
var actualPass = "president2012";

//Here we will use an if/else statement to print to the console whether or not the user has entered the correct information

//If the username entered equals the correct username AND the password entered matches the password 
if(userName == actualName && userPass = actualPass){
	
}else{
	
}


























