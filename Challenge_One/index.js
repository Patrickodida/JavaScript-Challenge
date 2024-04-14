// Challenge One - Question
/* Write a function named fizzBuzz that takes in two(2) parameters which are expected to be strings. The function should return the string Fizz if the combined length of the parameters is divisible by 3, the string Buzz if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and 3. */

// steps
// create a function "fizzBuzz" with two parameters(str1, and str2)
// Add the length of the two strings(str1, and str2)
// use the if statement to check for divisibility of the two strings
// Call the function to check for functionality

// solution
function fizzBuzz(str1, str2){
    const addedLength = str1.length + str2.length;
    if(addedLength % 3 === 0 && addedLength % 5 === 0){
        return 'FizzBuzz';
    } else if(addedLength % 3 === 0){
        return 'Fizz';
    } else if(addedLength % 5 === 0){
        return 'Buzz';
    } else {
        return addedLength;
    }
}

console.log(fizzBuzz('aaaaaaa', 'bbbbbbbb'));