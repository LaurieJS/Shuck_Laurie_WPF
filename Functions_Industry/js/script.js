/* 
    Laurie Shuck
    January 30, 2014
    Functions Industry Assignment
 */
 
//If an image on a website requires a size adjustment to fill a certain height or width, this calculation will help determine the new size of the image adjusted proportionally in pixels.


//This variable will prompt the user to enter the original width of the image
var originalWidth = prompt("Please enter the width of the image in pixels:");


//This while loop will keep prompting the user to enter the width until they fill in the prompt
while(originalWidth == "" || originalWidth == 0){
	 	originalWidth = prompt("To continue with the calculation, the width of the image is required.\nPlease enter the numerical value of the image's width:");
}


//This variable will prompt the user to enter the original height of the image
var originalHeight = prompt("Please enter the height of the image in pixels:");


//This while loop will keep prompting the user to enter the original height of the image
while(originalHeight == "" || originalHeight == 0){
	 	originalHeight = prompt("To continue with the calculation, the height of the image is required.\nPlease enter the numerical value of the image's height:");
}


//This variable will prompt the user to enter whether they have a new height or a new width
var userChoice = prompt("Will you be entering the new width that you would like the image to be, or the new height that you would like the image to be?\nPlease type in 'width' or 'height':");


//This while loop will keep prompting the user to enter if they have a new height or a new width
while(userChoice == "" || userChoice == 0){
	 	userChoice = prompt("To continue with the calculation 'width' or 'height' must be entered. Please type in your answer:");
}


//This variable will hold the data the user enters when they choose width
var newWidth;

//This variable will hold the data the user enters when they choose height
var newHeight;



//If the user's answer is width
if(userChoice == "width"){
		newWidth = prompt("Please enter the new width that you would like the image to be:");		

//Or, if the user's answer is height		 		
}else if(userChoice == "height"){
		newHeight = prompt("Please enter the new height that you would like the image to be:");
		
//Or, if they answered with something other than width or height		
}else{
	  prompt("Please go back and fill in whether you know the new height or the new width of the image. Thanks!");
}





console.log(originalWidth);
console.log(originalHeight);
console.log(userChoice);
console.log(newWidth);
console.log(newHeight);