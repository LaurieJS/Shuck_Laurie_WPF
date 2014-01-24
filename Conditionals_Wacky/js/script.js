/*
	Laurie Shuck
	January 23, 2014
	Conditionals Wacky
*/

/*You are enjoying a relaxing stroll through the park and are confronted by a Yeti. He demands gum from you, and if you don't have enough, you will suffer the wrath of the Yeti. This calculation will determine if you have enough gum to meet the Yeti's demands.*/

//This variable holds the prompt that is asking how many pieces of gum the Yeti is demanding from the user
var gumDemand = prompt("You are enjoying a peaceful stroll through the park when you are suddenly confronted by a Yeti. He demands gum from you, and if you do not have enough gum to meet his demands then you will suffer the wrath of the Yeti.\nEnter the number of pieces of gum that he is demanding from you:");


//This if statement will determine if the userGum prompt is empty
if(gumDemand === ""){
	
	 //If true, the user will be prompted to enter the gum demand again
	 gumDemand = prompt("Everyone knows that Yeti demands are nerve-wracking. Please enter the number of pieces of gum that the Yeti is demanding from you:");
}


//This variable will prompt the user to enter the amount of gum they have
var userGum = prompt("Enter the number of pieces of gum that you have:");


//This if statement will determine if the userGum prompt is empty
if(userGum === ""){
	 
	 //If true, the user will be prompted to enter the number of pieces of gum the Yeti is demanding
	 userGum = prompt("I know...you are speechless. Please enter the number of pieces of gum that you have:");
}


//This variable will ask if the user is a fast runner
var runningSpeed = prompt("Can you run fast? Please enter yes or no:");


//This if statement will determine if the runner prompt is empty
if(runningSpeed === ""){
	
	 //If true, this will prompt the user to enter if they are a fast runner
	 runningSpeed = prompt("Are you a fast runner? Please enter yes or no:");
}


//This variable will subtract the amount of gum that the user has from the Yeti's gum demand
var gumCalc = userGum - gumDemand;

//This variable holds the text that will print to the console if the user does not have enough gum and not a fast runner
var youLose = "Unfortunately, you do not have enough gum, and you are not a fast runner. This causes the Yeti to roar very loud directly in your face. You wish that you had enough gum because he has horrible breath. Sorry that you had to suffer the wrath of the Yeti. Maybe next time you will have more gum.";

//This variable holds the text that will print to the console if the user doesn't have enough gum, but can run fast
var youEscaped = "You ran away and escaped the wrath of the Yeti...this time.";

//This variable holds the text that will print to the console if the user has enough gum
var youWin = "You give the Yeti the gum that he demanded. He proceeds to make you a balloon animal from the gum to take home to your kids.";

//This variable holds the code that will print to the console if they left the prompts blank or the Yeti did not want any gum
var luckyYou = "You are very lucky. Either the Yeti did not want any gum, or you avoided the Yeti completely.";



//This else/if statement will determine the outcome of the encounter


//If the gumCalculation is less than zero, AND the user is a not a fast runner
if(gumCalc < 0 && runningSpeed == "no"){
	
	 //If true, the user will be alerted of their loss
	 alert(youLose);
	 
	  //If true, the loss will also print to the console
	 console.log(youLose);

	 
 //Or, if the gumCalc is less than zero, AND the user can run fast
}else if(gumCalc < 0 && runningSpeed == "yes"){
	
	 //If true, the user will be alerted of their escape
	 alert(youEscaped);
	 
	 //If true, an escape message will appear on the console
	 console.log(youEscaped);

	 
//Or, if the user's gumCalc is greater than or equal to zero, AND the prompts were not left empty, AND the Yeti did not ask for any gum
}else if(gumCalc >= 0 && gumDemand != "" && gumDemand != 0 && userGum != ""){
	
	 //If true, the winning text will be alerted to the user
	 alert(youWin);
	 
	 //If true, the winning text will be printed to the console
	 console.log(youWin);


//Or, this will alert and log to the console the outcome if the user failed to fill in the prompts, or the Yeti did not ask for gum	 
}else{
	
	 //If the user entered 0 for the gum demand or the prompts were left empty this will alert the user of their luck
	 alert(luckyYou);
	 
	 //If the user entered 0 for the gum demand or the prompts were left empty this will print the luckyYou message to the console
	 console.log(luckyYou);
}

