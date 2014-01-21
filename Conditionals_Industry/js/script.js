/*
	Laurie Shuck
	January 23, 2014
	Conditionals Industry
*/

/*When creating responsive websites, pixel widths need to be converted to percentage widths for the site to be viewed correctly on device screens of different sizes. In this calculation, we will use the target/context = result formula to calculate the percentage of an element compared to its container.*/

//This variable will prompt the user to enter the width of their element in pixels (target)
var elementWidth = prompt("Enter the width of the element in pixels:\nExample: if your element is 400 px enter 400.");

//This code will determine if the elementWidth prompt was left empty
if(elementWidth === ""){
	 elementWidth = prompt("Please enter the width of the element in pixels:");
}

//This variable will prompt the user to enter the width of the element's container in pixels (context)
var container = prompt("Enter the width of the element's container in pixels:");

//This code will determine if the container prompt was left empty
if(container === ""){
	 container = prompt("Please enter the width of the element's container in pixels:");
}

//This variable will make the following calculation: element divided by container (target divided by context) multiplied by 100-to make into a percentage
var responsiveCalc = elementWidth / container * 100;

//This variable will hold the message that will print to the console if the element is larger than 70% of its container
var bigElement = "This element fills a large portion of its container at " + responsiveCalc + "%.";

//This ternary will display to the console the elements width in percentage as well as its size compared to its container
(responsiveCalc > 75) ? console.log() : console.log();






console.log(elementWidth);
console.log(container);
console.log(responsiveCalc);
console.log(bigElement);