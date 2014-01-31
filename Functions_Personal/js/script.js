/* 
    Laurie Shuck
    January 30, 2014
    Functions Personal Assignment
*/
 
//How Many Bowls of Cereal?

//My children eat an enormous amount of cereal. This calculation will determine how many bowls of cereal that a household consumes in a certain amount of years.


//This variable will prompt the user to enter the number of boxes of cereal that are consumed in a week, on average
var cerealBox = prompt("Please enter the number of boxes of cereal that your household consumes per week:");


//While the cerealBox prompt is empty the user will be prompted to enter the number of boxes of cereal
while (cerealBox === "") {

    //This will collect the data and place the info in the cerealBox variable
    cerealBox = prompt("The number of boxes or cereal that your household consumes per week is required information:");
}


//This variable prompts the user to enter the number of bowls of cereal each box makes
var bowlsPerBox = prompt("On average, how many bowls of cereal does each box make?");


//While the bowlsPerBox prompt is empty the user will be prompted to enter the number of bowls of cereal
while (bowlsPerBox === "") {

    //This will prompt the user to answer the number bowls of cereal per box
    bowlsPerBox = prompt("To continue with the calculation, the number of bowls of cereal that each box makes is required:");

}


//This variable prompts the user to answer how many years they would like to calculate
var userYear = prompt("How many years of cereal consuption would you like to calculate?");


//While the userYear prompt is empty the user will be prompted to enter the number of years they would like to calculate
while (userYear === "") {

    //This will prompt the user to answer the number of years that they would like to calculate
    userYear = prompt("To continue with the calculation, the number of years of that you would like to calculate are required:");

}


//This function will calculate the amount of bowls of cereal eaten in a certain amount of years
function calculateCereal(boxes, bowls, years) {

    //This variable holds the answer to the number of boxes of cereal mutiplied by the amount of bowls in each box, and then it is multiplied by the number of years, which is multiplied by 52
    var total = boxes * bowls * (years * 52);
		
		//This message will be alerted to the user
		alert("In one week, your household eats " + boxes + " boxes of cereal, and each box makes " + bowls + " bowls of cereal. In " + years + " years, your household will eat " + total + " bowls of cereal.");
		
		 //This message will appear in the console
    console.log("In one week, your household eats " + boxes + " boxes of cereal, and each box makes " + bowls + " bowls of cereal. In " + years + " years, your household will eat " + total + " bowls of cereal.");
		
}//End of the calculateCereal function



//This will call the calculateCereal function using the global variable's prompts as arguments
calculateCereal(cerealBox, bowlsPerBox, userYear);


