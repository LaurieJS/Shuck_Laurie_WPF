/*
	Laurie Shuck
	January 23, 2014
	Conditionals Personal
*/

//Your child received a gift card for Christmas to a major toy store. This code will determine how much you will owe, or have left on the card after the trip to the store.

//This variable will ask the value of the gift card
var giftCard = prompt("What is the value of the gift card?");

//This if statement will determine if the giftCard prompt was empty
if(giftCard === ""){
	 giftCard = prompt("Please enter the value of your gift card again:");
}

//This variable will determine how much the child wants to spend
var toyCost = prompt("How much does the child want to spend?");

//This if statement will determine if the toyCost prompt was empty
if(toyCost === ""){
	 toyCost = prompt("Please enter how much your child would like to spend:");
}

//This variable will determine how much the local sales tax is
var tax = prompt("Please enter your sales tax amount.\nFor example, if your sales tax is 7% you would enter the number 7.");

//This if statement will determine if the tax prompt is empty
if(tax === ""){
	 tax = prompt("Sorry, please enter the sales tax again:");
}

//This code will calculate the cost of the toys with tax
var taxCalc = parseInt(toyCost) * (tax/100) + parseInt(toyCost);

//This variable will subtract the cost of the toys (with tax) from the giftcard
var cardCalc = parseInt(giftCard) - taxCalc;

//This is an if/else statement that will alert the outcome of the purchase
if(){
	
}else{
	
}





console.log(giftCard);
console.log(toyCost);
console.log(tax);
console.log(taxCalc);
console.log(cardCalc);
