/* 
    Laurie Shuck
    January 30, 2014
    Functions Wacky Assignment
 */
 
 
//Inner Earth
 
/*You are watching TV when you are magically sucked into the Inner Earth. The Leprechauns that reside there inform you that there is no way for you to return home because they are unable to escape the InnerEarth's gravity. The Leprechauns offer to build you a two bedroom home for a piece of gold, and if you have any other pieces of gold they will build two additional rooms to your house. In addition, if you have any Federal Reserve Notes they will build you one outhouse per note regardless of its denomination.*/


var gold = prompt("How many pieces of gold were you wearing when you magically got sucked into the Inner Earth?");

while(gold == ""){
	
		gold = prompt("Please enter the number of pieces of gold you were wearing when you were magically sucked into the Inner Earth:");
}

var notes = prompt("How many Federal Reserve Notes do you have? Enter the number of notes that you have and not their face value.\nExample: if you have four $20 dollar bills, you would enter the number 4.");

while(notes == ""){
	
		notes = prompt("Please enter the number of Federal Reserve Notes that you have:");
	
}