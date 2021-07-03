"use strict";

// THIS FUNCTION IS FOR NUMERIC VALIDATION DO NOT ALTER
function isNumeric (arg) {
    return !isNaN(parseFloat(arg))
}
// TO TEST YOUR FUNCTION UNCOMMENT THE CONSOLE LOGS AND CHECK THE RESULTS IN THE CONSOLE OF YOUR BROWSER


// Create a function named 'addUp' that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// If the input is not numeric return 'NaN'

function addUp (num) {
//Needed an if statement to declare the input as not numeric...which returns NaN
    if (isNaN(num)) {
        return NaN;
        //if the function is a number, a for loop was used to start the variable x at 1...then iterate thru the loop
        // depending on the execution of the function via the console
    } else {
        let result = 0;
        for (let x = 1; x <= num; x++) {
            result = result + x;
        }
        return result;
    }
}

// addUp(4) ➞ 10
console.log(addUp(4))
// addUp(13) ➞ 91
console.log(addUp(13))
// addUp(600) ➞ 180300
console.log(addUp(600))

// Create a function named 'calcAge' that takes the age in years and returns the age in days.
// If the input is not numeric return 'NaN'

function calcAge(num) {
    //Needed an if statement to declare the input as not numeric...which returns NaN (which was copied
    // from the previous function definition...a nice piece of code to bring the same result in this current function)
    if (isNaN(num)) {
        return NaN;
    }
    //However, if what the function calls in an age (num), we want to return it
    // multiplied by 365 to obtain the age in days from years
    else {
        return num * 365;
    }
}

// calcAge(65) ➞ 23725
console.log(calcAge(65))
// calcAge(0) ➞ 0
console.log(calcAge(0))
// calcAge(20) ➞ 7300
console.log(calcAge(20))

// Create a function named 'sumPolygon'
// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
// n will always be greater than 2.
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.
// If the value passed is not numeric or is less than 2 return the following string
// "Value is not the number of sides of a polygon"

//In this function, we were able to use the isNaN function in the if statement to
// see if value was not numeric...pretty neat!
function sumPolygon(n) {
    if (isNaN(n) || n < 2) {
        return "Value is not the number of sides of a polygon";
    }
    //Since they provided the formula in the exercise, we just returned the statement if the result was numeric
    else {
        return (n - 2) * 180;
    }
}

// sumPolygon(3) ➞ 180
console.log(sumPolygon(3))
// sumPolygon(4) ➞ 360
console.log(sumPolygon(4))
// sumPolygon(6) ➞ 720
console.log(sumPolygon(6))


// Create a function definition named 'sumAll' that takes in sequence of numbers and returns all the numbers added together.
// If any of the values are non numeric return the following string
// "Values are not all numeric"


// sumAll([1, 2, 3]) ➞ 6
// console.log(sumAll([1, 2, 3]))
// sumAll([0, 5, 6]) ➞ 11
// console.log(sumAll([0, 5, 6]))
// sumAll([3, 3, 3]) ➞ 9
// console.log(sumAll([3, 3, 3]));


// DO NOT ALTER THE FOLLOWING CONSTANTS
const tukeyPaper = {
    "title": "The Future of Data Analysis",
    "author": "John W. Tukey",
    "link": "https://projecteuclid.org/euclid.aoms/1177704711",
    "year_published": 1962
}

const thomasPaper = {
    "title": "A mathematical model of glutathione metabolism",
    "author": "Rachel Thomas",
    "link": "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
    "year_published": 2008
}

// Create a function called 'getAuthorAndYearPublished' that takes in an object
// Return the author and year_published in the following string format
// Ry Ance Sutton, 2021


// getAuthorAndYearPublished(tukeyPaper) ➞ John W. Tukey, 1962
// console.log(getAuthorAndYearPublished(tukeyPaper))
// getAuthorAndYearPublished(thomasPaper) ➞ Rachel Thomas, 2008
// console.log(getAuthorAndYearPublished(thomasPaper))