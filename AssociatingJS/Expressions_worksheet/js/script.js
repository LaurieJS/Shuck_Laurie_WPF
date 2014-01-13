/*
Laurie Shuck
January 16, 2014
Expressions Worksheet
 */

//Dog Years

//Calculate Sparky's age in dog years
//Sparky's age will be given in humanYears
//A dog year is 7 years (dogYears)
var humanYears = 4;
var dogYears = 7;

//The variable sparkyAge is equal to human years multiplied by dog years
var sparkyAge = humanYears * dogYears;
//Print to the console Sparky's age in human years and dog years
console.log("Sparky is " + humanYears + " human years old, which is " + sparkyAge + " in dog years.");


//Slice of the Pie part 1

//Calculate how many slices of pizza each person will receive
//Multiply pizza * slices, and divide by the number of people
var slices = 5.5;
var people = 8;
var pizzas = 7;

//Multiply pizza * slices, and divide by the number of people to find the slices per person (slicesPerson variable)
var slicesPerson = pizzas * slices / people;
//Print to the console the amount of slices of pizza per person
console.log("Each person ate " + slicesPerson + " slices of pizza at the party.");

//Slice of the Pie part 2

//Calculate how many slices of leftover pizza will go to Sparky 
//Multiply pizza * slices, then divide (with modulo) by people, with the remainder going to Sparky
var sparkyPizza = pizzas * slices % people;
//Print to the console how many slices of pizza Sparky will receive
console.log("Sparky got " + sparkyPizza + " slices of pizza.");


//Average Shopping Bill
//Calculate a weekly grocery bill using 5 weekly bills
var weeklyBill = [78, 82, 97, 115, 65];

var total = weeklyBill[0] + weeklyBill[1] + weeklyBill[2] + weeklyBill[3] + weeklyBill[4];
var weeklyAvg = total / 5;

console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + weeklyAvg + " per week.")

//Discounts

//We need to find the price of an item with or without sales tax
var origPrice = 50;
var discount = 10;
var itemDesc = "coat";
var salesTax =  0.07;

//Without tax equals the original price divided by the discount-- subtracted from the original price
var withoutTax = origPrice - (origPrice / discount);
//With tax equals the without tax price * the sales tax--added to the without tax price
var withTax =  withoutTax + (withoutTax * salesTax);
console.log("Your " + itemDesc + " was originally $" + origPrice + " but, after a " + discount + "% discount, it is now $" + withoutTax + " without tax, and $" + withTax + " with tax")









