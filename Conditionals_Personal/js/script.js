/*
	Laurie Shuck
	January 23, 2014
	Conditionals Personal
*/

/*Your child received a gift card for Christmas to a major toy store. This code will determine how much you will owe, or how much you will have left on the card after the purchase. (I came up with this idea when I took my kids to the toy store to purchase toys with gift cards today.*/

//This variable will ask the value of the gift card
var giftCard = prompt("What is the value of the gift card?");

//This if statement will determine if the giftCard prompt was empty
if(giftCard === ""){
	
	 //This will prompt the user to enter the value of the gift card again
	 giftCard = prompt("Please enter the value of your gift card again:");
}

//This variable will determine how much the child wants to spend
var toyCost = prompt("How much does the child want to spend?");

//This if statement will determine if the toyCost prompt was empty
if(toyCost === ""){
	
	 //This will prompt the user to enter how much the child would like to spend
	 toyCost = prompt("Please enter how much your child would like to spend:");
}

//This variable will determine how much the local sales tax is
var tax = prompt("Please enter your sales tax amount.\nFor example, if your sales tax is 7% you would enter the number 7.");

//This if statement will determine if the tax prompt is empty
if(tax === ""){
	
	 //This prompt will ask the user to enter the sales tax again
	 tax = prompt("Sorry, please enter the sales tax again:");
}

//This variable will calculate the cost of the toys including tax
var taxCalc = parseFloat(toyCost) * (tax/100) + parseFloat(toyCost);

//This variable will subtract the cost of the toys (including tax) from the giftcard
var cardCalc = parseFloat(giftCard) - taxCalc;

//This is an if/else statement that will alert the outcome of their potential purchase
//If the cardCalc is larger than 0
if(cardCalc > 0){
	
	//This variable holds the congratulatory message
	var congrats = "Congratulations! The gift card will cover the cost of the toys, and the balance that will be remaining on the card will be $" + cardCalc + ".";
	
	//The following code will display the congratulatory message in an alert box and to the console
	alert(congrats);
	console.log(congrats);
	
//If cardCalc is not larger than 0
}else{
	
	//This expression will calculate the positive price that the customer will owe
	cardCalc *= -1;
	
	//This variable holds the apology message
	var sorry = "Sorry, your gift card will not cover the toy purchase. You will need $" + cardCalc +" more to purchase the toys.";
	
	//The following code will display the apology message in an alert box and to the console
	alert(sorry);
	console.log(sorry);
}
