/*
Laurie Shuck
January 16, 2014
Expressions Worksheet
 */

//Dog Years

//Calculate dog years
var humanYears = 4;
var dogYears = 7;

var sparkyAge = humanYears * dogYears;
console.log("Sparky is " + humanYears + " human years old, which is " + sparkyAge + " in dog years.");


//Slice of the Pie part 1

//Multiply pizza * slices and divide by people
var slices = 5.5;
var people = 8;
var pizzas = 7;

var slicesPerson = pizzas * slices / people;
console.log("Each person ate " + slicesPerson + " slices of pizza at the party.");

//Slice of the Pie part 2

//Multiply pizza * slices then divide by people with the remainder going to Sparky
var sparkyPizza = pizzas * slices % people;
console.log("Sparky got " + sparkyPizza + " slices of pizza.");


//Average Shopping Bill

var weeklyBill = [78, 82, 97, 115, 65];

var total = weeklyBill[0] + weeklyBill[1] + weeklyBill[2] + weeklyBill[3] + weeklyBill[4];
var weeklyAvg = total / 5;

console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + weeklyAvg + " per week.")











