/* 
    Laurie Shuck
    January 16, 2014
    Expressions Industry Assignment
 */

/*This calculation will determine the width of columns on a webpage. We will need the total width of the page (px), the length of the left or right margin (px), and how many columns you would like your page to have.
 */

//First, we need to determine the total width of the page
var pageWidth = prompt("What is the total width of your webpage?");

//Then, we need to find out the amount of margin desired
var margin = prompt("Indicate the margin amount that you would like on either side of the page--in pixels:");

//Next, we need to determine how many columns the webpage should have
var columns = prompt("How many columns would you like?");

//This line will multiply the left or right margin by 2, and then it will subtract that amount from the page width, and then it will divide by the number of columns.
var solution = (pageWidth - margin * 2) / columns;

var answer = ("For a webpage that is " + pageWidth + " pixels wide with a left or right margin of " + margin  )
















