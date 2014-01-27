/* 
    Laurie Shuck
    January 30, 2014
    Functions Personal Assignment
 */
 
//How Many Bowls of Cereal?

//My children eat an enormous amount of cereal. This calculation will determine how many bowls of cereal that a household consumes in a year.

//This variable will prompt the user to enter the number of boxes of cereal that are consumed in a week, on average
var cerealBox = prompt("Please enter the number of boxes of cereal that your household consumes per week:");


//While the cerealBox prompt is empty the user will be prompted to enter the number of boxes of cereal
while(cerealBox == ""){
	
			//This will collect the data and place the info in the cerealBox variable
	   cerealBox = prompt("Please enter the number of boxes or cereal that your household consumes per week:");
}


//This variable prompts the user to enter the number of bowls of cereal each box makes
var bowlsPerBox = prompt("On average, how many bowls of cereal does each box make?");



while(bowlsPerBox == "" || bowlsPerBox == 0){
	
		//This will prompt the user to answer the number bowls of ceral per box
		bowlsPerBox = prompt("To continue with the calculation, the number of bowls each box makes is required:");
	
}

//This variable holds the number of weeks in a year
var weeksYear = 52;

function calculateCereal(){
		return cerealBox * bowlsPerBox * weeksYear;
}

var cerealTotal = calculateCereal();

var cerealMessage = "In one week your household eats " + cerealBox + " boxes of cereal, and each box makes " + bowlsPerBox + " bowls of cereal. In one year your household will eat " + cerealTotal + " bowls of cereal.";

console.log(cerealMessage);


/*
console.log(cerealBox);
console.log(bowlsPerBox);
console.log(weeksYear);
console.log(cerealTotal);
console.log(cerealMessage);
*/






