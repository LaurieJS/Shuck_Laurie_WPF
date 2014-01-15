/*
Laurie Shuck
January 16, 2014
Expressions Worksheet
 */

//Dog Years

//Calculate Sparky's age in dog years
//Sparky's age will be given in humanYears
//A dog year is 7 years (dogYears)
var sparkyAge = 4;

//The variable sparkyAge is equal to human years multiplied by dog years
var sparkyAge = humanYears * dogYears;

//Print to the console Sparky's age in human years and dog years
console.log("Sparky is " + humanYears + " human years old, which is " + sparkyAge + " in dog years.");


//Slice of the Pie part 1

//Calculate how many slices of pizza each person will receive
//These variables respresent: How many slices, how many people, how many pizzas
var slices = 5.5;
var people = 8;
var pizzas = 7;

//Multiply pizza * slices, and divide by the number of people to find the slices per person (slicesPerson variable)
var slicesPerson = pizzas * slices / people;

//Print to the console the amount of slices of pizza per person
console.log("Each person ate " + slicesPerson + " slices of pizza at the party.");


//Slice of the Pie part 2

//Calculate how many remaining slices of pizza will go to Sparky 
//Multiply pizza * slices, then divide (with modulo) by people, with the remainder going to Sparky
var sparkyPizza = pizzas * slices % people;

//Print to the console how many slices of pizza Sparky will receive
console.log("Sparky got " + sparkyPizza + " slices of pizza.");


//Average Shopping Bill

//Calculate a weekly grocery bill using 5 weekly bills
//An array filled with the five weekly bill amounts
var weeklyBill = [78, 82, 97, 115, 65];

//Add the weekly bills together to find the total for five weeks
var total = weeklyBill[0] + weeklyBill[1] + weeklyBill[2] + weeklyBill[3] + weeklyBill[4];
//To find the weekly average, divide the total  by five
var weeklyAvg = total / 5;

//Print the total of the five weekly bills, and the weekly average of the bills
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + weeklyAvg + " per week.")

//Discounts

//Find the price of an item with or without sales tax
//These variables represent the original price($), the discount (%), an item description, and the applicable sales tax
var origPrice = 50;
var discount = 10;
var itemDesc = "coat";
var salesTax =  0.07;

//The withoutTax variable equals the original price divided by the discount-- subtracted from the original price
var withoutTax = origPrice - (origPrice / discount);
//The withTax variable equals the without tax price * the sales tax--added to the without tax price
var withTax =  withoutTax + (withoutTax * salesTax);

//Print to the console the item description, the original price, the discount, and the new price with and without tax
console.log("Your " + itemDesc + " was originally $" + origPrice + " but, after a " + discount + "% discount, it is now $" + withoutTax + " without tax, and $" + withTax + " with tax")









