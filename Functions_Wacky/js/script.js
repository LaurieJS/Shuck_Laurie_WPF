/* 
    Laurie Shuck
    January 30, 2014
    Functions Wacky Assignment
 */
 
 
//Inner Earth
 
/*You are watching TV when you are magically sucked into the Inner Earth. The Leprechauns that reside there inform you that there is no way for you to return home because they are unable to escape the InnerEarth's gravity. The Leprechauns offer to build you a two bedroom home for a piece of gold, and if you have any other pieces of gold they will build two additional rooms to your house. In addition, if you have any Federal Reserve Notes they will build you one outhouse per note regardless of its denomination.*/

//This variable holds the prompt that asks the user how many pieces of gold they have
var gold = prompt("How many pieces of gold were you wearing when you magically got sucked into the Inner Earth?");


//While the gold prompt remains empty
while(gold == ""){
	
		//This prompt will appear until the user fills in how many pieces of gold they have
		gold = prompt("Please enter the number of pieces of gold you were wearing when you were magically sucked into the Inner Earth:");
}

var notes = prompt("How many Federal Reserve Notes do you have? Enter the number of notes that you have and not their face value.\nExample: if you have four $20 dollar bills, you would enter the number 4.");

while(notes == ""){
	
		 notes = prompt("Please enter the number of Federal Reserve Notes that you have:");
	
}

var calcOutcome = function(gold){
	   var goldAnswer = gold * 2;
		 return goldAnswer;
	
}

var final = calcOutcome(gold);

var message = "The Leprechauns will build you a house with " + final + " bedrooms and " + notes + " outhouses.";

if(final >= 12){
	 console.log(message + " I was not aware that Mr. T got sucked into the Inner Earth.");
	
	
}else if(final < 12 && final > 0){
		console.log(message + " You have a modest home, but you still have room to have a couple miniature giraffes as pets.");
}else{
	  console.log(message + " You better start looking around for twigs and leaves to make shelter. Hopefully, you have something the Leprechauns want, or you are going to be a homeless Inner Earth dweller.");

}



/*
console.log(gold);
console.log(notes);*/
/*console.log(calcOutcome);*/






