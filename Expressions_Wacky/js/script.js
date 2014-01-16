/* 
    Laurie Shuck
    January 16, 2014
    Expressions Wacky Assignment
 */
 
 /*You placed an order for unicorns and horses, and now you need to purchase shoes for them. This calculation will determine how many shoes are being ordered by a local customer*/
 
//This is the array that will hold the customer's information
 var shoeOrder = [];
		 shoeOrder[0] = prompt("Which unicorn farm shall we deliver the shoes?");
		 shoeOrder[1] = prompt("Enter the number of unicorns that you are purchasing shoes for:");
		 shoeOrder[2] = prompt("Enter the number of horses that you are purchasing shoes for:");
		 shoeOrder[3] = prompt("Are any of the animals missing feet? If yes, enter the number of feet that are missing. If not, enter 0.");
		 
	var unicornCalc = shoeOrder[1]	* 4;
	
	var horseCalc = shoeOrder[2] * 4;
	alert(horseCalc);