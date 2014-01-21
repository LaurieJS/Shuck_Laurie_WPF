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






console.log(gumDemand);