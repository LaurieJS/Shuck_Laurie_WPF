/*
 Laurie Shuck
 January 30, 2014
 Functions Wacky Assignment
*/


//Inner Earth

/*You are watching TV when you are magically sucked into the Inner Earth. The Leprechauns that reside there inform you that there is no way for you to return home because they are unable to escape the InnerEarth's gravity. The Leprechauns offer to build you a two bedroom home for a piece of gold, and if you have any additional pieces of gold they will build two additional rooms to your house. Furthermore, if you have any Federal Reserve Notes they will build you one outhouse per note regardless of its denomination.*/


//This variable holds the prompt that asks the user how many pieces of gold they have
var gold = prompt("How many pieces of gold were you wearing when you magically got sucked into the Inner Earth?");


//While the gold prompt remains empty
while (gold === "") {

    //This prompt will appear until the user fills in how many pieces of gold they have
    gold = prompt("Please enter the number of pieces of gold you were wearing when you were magically sucked into the Inner Earth:");
}


//This variable holds the prompt that asks the user how many Federal Reserve Notes they have
var notes = prompt("How many Federal Reserve Notes do you have? Enter the number of notes that you have and not their face value.\nExample: If you have four $20 dollar bills, you should enter the number 4.");


//While the notes prompt is empty the user will be prompted to fill in how many Federal Reserve Notes they have
while (notes === "") {

    //This prompt will appear until the user fills in how many Federal Reserve Notes that they have
    notes = prompt("Please enter the number of Federal Reserve Notes that you have:");

}




//This function calculates the number of bedrooms the user's house will have by multiplying their gold amount by 2
function calcOutcome() {

    //return the gold calculation
    return gold * 2;


}


//This variable holds the answer from the calcOutcome function
var total = calcOutcome();


//This message will be displayed to the console and alerted to the user
var message = "The Leprechauns will build you a house with " + total + " bedrooms and " + notes + " outhouses.";



//If the final number of bedrooms is greater than or equal to 12
if (total >= 12) {

    //If true, this message will be alerted to the user
    alert(message + " I was not aware that Mr. T got sucked into the Inner Earth.");

    //If true, this message will print to the console
    console.log(message + " I was not aware that Mr. T got sucked into the Inner Earth.");

//Or, if the bedrooms are under 12 but greater than 0
} else if (total < 12 && total > 0) {

    //If true, this message will be alerted to the user
    alert(message + " You will have a modest home, but you still have room to have a couple miniature giraffes as pets.");

    //If true, this will print to the console
    console.log(message + " You will have a modest home, but you still have room to have a couple miniature giraffes as pets.");

//Or,
} else {

    //If the user has no gold or they entered garbled info this message will be alerted to the user
    alert(message + " You better start looking around for twigs and leaves to make a shelter. Hopefully, you have something the Leprechauns want, or you are going to be a homeless Inner Earth dweller.");

    //If the user has no gold or they entered garbled info this will print to the console
    console.log(message + " You better start looking around for twigs and leaves to make a shelter. Hopefully, you have something the Leprechauns want, or you are going to be a homeless Inner Earth dweller.");

}








