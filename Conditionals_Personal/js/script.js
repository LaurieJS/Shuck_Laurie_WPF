/*
	Laurie Shuck
	January 23, 2014
	Conditionals Personal
*/

//Your child received a gift card for Christmas to a major toy store. This code will determine how much you will owe, or have left on the card after the trip to the store.

//This variable will determine the amount of the gift card
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
var tax = prompt("What is your sales tax?");








alert(giftCard);
alert(toyCost);
