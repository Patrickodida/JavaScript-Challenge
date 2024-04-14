// Challenge-One - Question
/* Write a JavaScript program that prompts a user to enter their year of birth and in turn prints a string in the console stating whether the user is a minor, a youth, or an elder.  Anyone below 18 years is a minor, anyone between 18 and 36 years is a youth and the rest are elders.
 */

// steps
// Initialize a variable and assign it to a prompt() with a question
// Initialize a variable and assign it to get the current year
// Initialize a variable age and assign it to get the difference between the current year and the users input year of birth.
// Create a function 'getUsersAgeBracket' to get the users age bracket
// Pass "age" as an argument to the function
// Inside the function use the if statement to check the age bracket of the user
// Call the function and print the results to the console

// Solution

let usersYearOfBirth = prompt('Enter your year of birth:');
let currentYear = new Date().getFullYear();
let age = currentYear - usersYearOfBirth;

function getUsersAgeBracket(age){
    if(age < 18){
        return "You're a Minor";
    } else if(age < 36){
        return "You're a Youth";
    } else {
        return "You're an Elder";
    }
}

console.log(getUsersAgeBracket(age));


