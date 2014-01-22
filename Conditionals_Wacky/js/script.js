/*
	Laurie Shuck
	January 23, 2014
	Conditionals Wacky
*/

/*You are enjoying a relaxing stroll through the park and are confronted by a Yeti. He demands gum from you, and if you don't have enough, you will suffer the wrath of the Yeti. This calculation will determine if you have enough gum to meet the Yeti's demands.*/

var gumDemand = prompt("You are enjoying a peaceful stroll through the park when you are suddenly confronted by a Yeti. He demands gum from you, and if you do not have enough gum to meet his demands, you will suffer the wrath of the Yeti.\nEnter the number of pieces of gum that he is demanding from you:");

//This if statement will determine if the userGum prompt is empty
if(gumDemand === ""){
	
	 //If true, the user will be prompted to enter the gum demand again
	 gumDemand = prompt("Everyone knows that Yeti demands are nerve-wracking. Please enter the number of pieces of gum that the Yeti is demanding from you:");
}

//This variable will prompt the user to enter the amount of gum they have
var userGum = prompt("Enter the number of pieces of gum that you have:");

//This if statement will determine if the userGum prompt is empty
if(userGum === ""){
	 userGum = prompt("I know...you are speechless. Please enter the number of pieces of gum that you have:");
}

//This variable will ask if the user is a fast runner
var runningSpeed = prompt("Can you run fast? Please enter yes or no:");

//This if statement will determine if the runner prompt is empty
if(runningSpeed === ""){
	 runningSpeed = prompt("Are you a fast runner? Please enter yes or no:");
}

//This variable will subtract the amount of gum that the user has from the Yeti's gum demand
var gumCalc = userGum - gumDemand;

//This else/if statement will determine the outcome of the encounter

//If the gumCalculation is less than zero, AND the user is a not a fast runner
if(gumCalc < 0 && runningSpeed === false){
	 console.log("Unfortunately, you do not have enough gum, and you are not a fast runner. This causes the Yeti to roar very loud directly in your face. You wish that you had enough gum because he has horrible halitosis. Sorry, you had to suffer the wrath of the Yeti. Maybe next time you will have more gum.");
}else if(gumCalc < 0 && runningSpeed === true){
	 console.log("You ran away and escaped the wrath of the Yeti...this time.");
}else if(gumCalc >= 0){
	
}else{
	
}





console.log(gumDemand);
console.log(userGum);
console.log(runningSpeed);
console.log(gumCalc);