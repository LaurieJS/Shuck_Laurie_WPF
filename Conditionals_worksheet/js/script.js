/*
	Laurie Shuck
	January 23, 2014
	Conditionals Worksheet
*/

//Stuff Your Face 

//This is the variable that holds the competitor's weight
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

//This is the variable holding the gas tank's capacity
var tankCapacity = 30;

//This will calculate how many miles of gas remaining
var gasCalc = tankCapacity * tankReading * gasEfficiency;

//The following if/else statement will determine if you have enough gas

//If your gas tank has more than 200 gallons of gas
if(gasCalc > 200){
	
	//If true, this statement will print to the console
	console.log("Yes, you can make it without stopping for gas!");
	
//Or	
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

//If the usernames match AND the passwords match 
if(userName == actualName && userPass == actualPass){
	
	//If the usernames and passwords BOTH match this will print to the console
	console.log("Welcome, " + userName + "!");

//If the username entered does not match 
}else if(userName !== actualName){
	
	//If the user names do not match this will be printed to the console 
	console.log("User not found. Try again.");

//If the usernames match, but the passwords do not	
}else if(userName == actualName && userPass !== actualPass){
	
	//If the usernames match, and the passwords do not, this will print to the console
	console.log("Password does not match our records.");
}

//Movie ticket price (Group 3)

//The following code will determine if you get a discounted movie price

//The variable holding the movie time in whole numbers
var movieTime = 7;

//This is the variable that holds the moviegoer's age
var age = 28;

//This is the variable for the regular price
var regPrice = 12;

//This is the variable for the regular price
var salePrice = 7;

//If the movie time is greater than 3 AND less than 5
if(movieTime > 3 && movieTime < 5){
	
	//If true, this will print ot the console
	console.log("The ticket price is $" + salePrice + ".");
	
//If the age is under 10 OR 55 or older
}else if(age < 10 || age >= 55){
	
	//If under 10 or 55 and older this will print to the console
	console.log("The ticket price is $" + salePrice + ".");
}else{
	
	//If the other statments are not true, this will print to the console
	console.log("The ticket price is $" + regPrice + ".");
}























