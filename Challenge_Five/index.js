// Challenge Five - Question
/* Given an integer num, write a function that repeatedly adds all its digits until the result has only one digit, and return it.
 */

// Example 1:

// Input: num = 38;
// Output: 2;
// Explanation: The Process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 only has one digit, return it


// Steps:

// Initialize a variable 'num' and assign it to a value
// Create a function 'addDigits' with a parameter of (num)
// Convert the number 'num' to a string
// Initialize the 'sum' variable to zero.
// Use a for of loop to iterate through number
// Add the 'sum' to the 'digit' after converting it back to number
// Use the if statement to check if the sum is greater or equal to 10
// If its true return and call the 'addDigits' function 
// if not return the sum


let num = 38;

function addDigits(num){
    let numToString = num.toString();
    let sum = 0;
    for(let digit of numToString){
        sum += parseInt(digit);
    }
    if(sum >= 10){
        return addDigits(sum);
    } else {
        return sum;
    }
}

console.log(addDigits(num));