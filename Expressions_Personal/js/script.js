/* 
    Laurie Shuck
    January 16, 2014
    Expressions Personal Assignment
 */

//Dinner with friends

//When I go to dinner with friends, we often split the bill evenly after we decide on the tip amount. This caluculator will determine the cost of each diner's portion of the bill after the gratuity has been added.

//We will begin by finding out the cost of the bill.
var bill = prompt("What is the total cost of your bill?") - 0;

//Next, we will find out how many people are dining.
var diners = prompt("How many diners?") - 0;

//Then we will find out the percentage of tip that they would like to leave.
var tip = prompt("How much of a tip would you like to leave? \nExample: 20 equals 20%.") - 0;

//Here we will begin by converting the tip into a percentage.
var tipCalc = tip / 100;

//On this line, we will multiply the bill by the tip,which is divided by 100.
var billCalc = bill * tipCalc;

//Then we will add the bill to the billCalc, and divide that by the number of diners.
var finalCost = (bill + billCalc) / diners;

//Finally, we will print the calculated information to the console.
console.log("With a bill of $" + bill + " and a tip of " + tip + "%, each of the " + diners + " diners will owe $" + finalCost + ".");
















