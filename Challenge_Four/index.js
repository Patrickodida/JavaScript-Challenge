// Challenge Four - Question

/* Write a function named firstPalindrome which takes a parameter: words. Given an array of string words, return the first palindromic string in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.
 */

// Example 1:

// Input: words = ["abc", "car", "ada", "racecar", "cool"]
// output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first

// Steps 

// Initialize a variable and assign it to the words array
// Create a function 'firstPalindrome' with parameter 'words'
// Use a for of loop to iterate through each word in words array one by one
// Initialize a variable 'reversedWord'.
// In the 'reversedWord' use the split() method to split each word into a single character, then reverse each word using the reverse() method, and finally join the characters into a word using the join() method.
// Use the if statement to check whether the word is equal to the reversed word
// Return the string of the first palindrom word and if it does'nt exist return an empty string

// Solution

let words = ["abc", "car", "ada", "racecar", "cool"];

function firstPalindrome(words){
    for(let word of words){
        let reversedWord = word.split("").reverse().join("");
        if(word === reversedWord){
            return word;
        }
    }
    return "";
}

console.log(firstPalindrome(words));
