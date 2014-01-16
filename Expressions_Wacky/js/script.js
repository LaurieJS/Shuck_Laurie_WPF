/* 
    Laurie Shuck
    January 16, 2014
    Expressions Wacky Assignment
 */
 
 /*You placed an order for unicorns and horses, and now you need to purchase shoes for them. This calculation will determine how many shoes you will need to order.*/
 
//This is the array that holds three prompts, which asks the user information about their shoe buying needs.
 var shoeOrder = [];
 
 		 //This array object finds out how many unicorns need shoes
		 shoeOrder[0] = prompt("Enter the number of unicorns that you are purchasing shoes for:");
		 
		 //This array object finds out how many horses need shoes 
		 shoeOrder[1] = prompt("Enter the number of horses that you are purchasing shoes for:");
		 
		 //This array object finds out if any of the animals have missing feet
		 shoeOrder[2] = prompt("Are any of the animals missing feet? If yes, enter the number of feet that are missing. If not, enter 0.");
		 
	//This variable multiplies the number of unicorns by the number of feet unicorns have	 
	var unicornCalc = shoeOrder[0]	* 4;
	
	//This variable multiplies the number of horses by the number of feet that horses have
	var horseCalc = shoeOrder[1] * 4;
	
	var shoeCalc = unicornCalc + horseCalc - shoeOrder[2];
	
	console.log("For " + shoeOrder[0] + " unicorns and " + shoeOrder[1] + " horses, which are missing " + shoeOrder[2] + " feet, you will need to purchase " + shoeCalc + " shoes.");
	
	alert("For " + shoeOrder[0] + " unicorns and " + shoeOrder[1] + " horses, which are missing " + shoeOrder[2] + " feet, you will need to purchase " + shoeCalc + " shoes.");