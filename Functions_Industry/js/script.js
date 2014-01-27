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
	  alert("Please go back and fill in whether you know the new height or the new width of the image. Thanks!");
}

while(newWidth == "" || newWidth == 0){
	   newWidth = prompt("Sorry, but we cannot continue until you enter the new width that you would like the image to be:");
}

while(newHeight == "" || newHeight == 0){
	   newHeight = prompt("Sorry, but we cannot continue until you enter the new width that you would like the image to be:");
}

//This function calculates the information using the data gathered when the user's answer is width	
function calculateWidth(originalWidth, originalHeight, newWidth){
	
		//This will return the originalHeight multiplied by the newWidth divided by the originalWidth
		return originalHeight * newWidth / originalWidth;
	
}




//This variable will hold the answer returned from the width function
var widthTotal = calculateWidth(originalWidth, originalHeight, newWidth);

//This variable will hold the message that will print to the console if the user chose width
var widthMessage = "Your original image width is " + originalWidth + " pixels and the height is " + originalHeight + " pixels. When you change the width to " + newWidth + " pixels the new height will be " + widthTotal + " pixels.";



//This function calculates the information using the data gathered when the user's answer is height
function calculateHeight(originalWidth, newHeight, originalHeight){
			
			//This will return the information originalWidth multplied by newHeight divided by the originalHeight
	 		return originalWidth * newHeight / originalHeight;
			
}




//This variable will hold the answer returned from the height function
var heightTotal = calculateHeight(originalWidth, newHeight, originalHeight);

//This variable holds the message that will print to the console if they chose height 
var heightMessage = "Your original image width is " + originalWidth + " pixels and the height is " + originalHeight + " pixels. When you change the height to " + newHeight + " pixels the new width will be " + heightTotal + " pixels.";


//If the user's choice is width the widthMessage will be alerted, and if not the heightMessage will be alerted to the user
(userChoice == "width") ? alert(widthMessage) : alert(heightMessage);


//If the user's choice is width the widthMessage will print to the console, and if not the heightMessage will print to the console
(userChoice == "width") ? console.log(widthMessage) : console.log(heightMessage);


/*
console.log(originalWidth);
console.log(originalHeight);
console.log(userChoice);
console.log(newWidth);
console.log(newHeight);
console.log(widthTotal);
*/