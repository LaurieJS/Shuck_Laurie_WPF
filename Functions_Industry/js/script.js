/* 
    Laurie Shuck
    January 30, 2014
    Functions Industry Assignment
 */
 
//If an image on a website requires a size adjustment to fill a certain height or width, this calculation will help determine the new size of the image adjusted proportionally in pixels.


//This variable will prompt the user to enter the original width of the image
var originalWidth = prompt("Please enter the original width of the image in pixels:");


//While the originalWidth prompt is empty or 0 this will keep prompting the user to enter the width until they fill in the prompt
while (originalWidth === "" || originalWidth === 0) {

    //The user will prompted to answer this question until they fill in the prompt
    originalWidth = prompt("To continue with the calculation, the width of the image is required.\nPlease enter the numerical value of the image's width:");
}



//This variable will prompt the user to enter the original height of the image
var originalHeight = prompt("Please enter the original height of the image in pixels:");


//This while loop will keep prompting the user to enter the original height of the image if the prompt was left empty or 0
while (originalHeight === "" || originalHeight === 0) {

    //The user will prompted to answer this question until they fill in the prompt
    originalHeight = prompt("To continue with the calculation, the height of the image is required.\nPlease enter the numerical value of the image's height:");
}



//This variable will prompt the user to enter whether they have a new height or a new width
var userChoice = prompt("Will you be entering the new width that you would like the image to be, or the new height that you would like the image to be?\nPlease type in 'width' or 'height':");


//This while loop will keep prompting the user to enter if they have a new height or a new width
while (userChoice === "" || userChoice === 0) {

    //The user will be prompted to answer this question until they fill in the prompt
    userChoice = prompt("To continue with the calculation 'width' or 'height' must be entered. Please type in your answer:");
}



//If the user's answer is width
if (userChoice == "width") {

    //This variable will prompt the user to enter the new width
    var newWidth = prompt("Please enter the new width that you would like the image to be:");

//Or, if the user's answer is height
} else if (userChoice == "height") {

    //This variable will prompt the user to enter the new height
    var newHeight = prompt("Please enter the new height that you would like the image to be:");

//Or, if they answered with something other than width or height
} else {

    //The user will be alerted to go back and fill in height or width
    alert("Please go back and fill in whether you know the new height or the new width of the image. Thanks!");
}


//While the newWidth prompt is empty or equal to 0
while (newWidth === "" || newWidth === 0) {

    //The user will prompted to answer the question until they fill in the prompt
    newWidth = prompt("Sorry, but we cannot continue until you enter the new width that you would like the image to be:");
}

//While the newHeight prompt is empty or equal to 0
while (newHeight === "" || newHeight === 0) {

    //The user will prompted to answer this question until they fill in the prompt
    newHeight = prompt("Sorry, but we cannot continue until you enter the new width that you would like the image to be:");
}


//I created an anonymous function to calculate the width
var widthTotal = function () {

    //This variable will make the width calculation
    var widthFinal = originalHeight * newWidth / originalWidth;

    //This will return a message to the user when the function is called
    return "Your original image width is " + originalWidth + " pixels, and the height is " + originalHeight + " pixels. When you change the width to " + newWidth + " pixels, the new height will be " + widthFinal + " pixels.";
};


//I created an anonymous function to calculate the height
var heightTotal = function () {

    //This variable will multiply the original width by the new height, which is divided
    var heightFinal = originalWidth * newHeight / originalHeight;

    //This will return a message to the user when the function is called
    return "Your original image width is " + originalWidth + " pixels, and the height is " + originalHeight + " pixels. When you change the height to " + newHeight + " pixels, the new width will be " + heightFinal + " pixels.";
};



//This ternary with alert the user with the widthTotal function message if the user entered width, or else it will use the heightTotal function message
(userChoice == "width") ? alert(widthTotal()) : alert(heightTotal());


//This ternary with print to the console the widthTotal function message if the user entered width, or else it will use the heightTotal function message
(userChoice == "width") ? console.log(widthTotal()) : console.log(heightTotal());






