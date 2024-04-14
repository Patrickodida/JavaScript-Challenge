// Challenge - Three - Question

/* Write a function named twoSum which takes two parameters: nums and target. Given an array of integer nums and an integer target, return indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 */

// Example 1:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Steps
// Initailize a variable 'nums', and assign it to the nums array
// Initialize the variable 'target', and assign it to the target value
// Create a function 'twoSums', with parameters (nums, target)
// Inside the function Initialize a variable 'numIndices' and assign it an empty array
// Use a forloop to iterate through the nums array
// Use the if statement to check whether the sum of the indices in the nums array equal to the target
// Use the push() method to add the indices to the 'numIndices' array

// Solution

let nums = [2, 7, 11, 15];
let target = 9;

function twoSums(nums, target){
    let numIndices = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                numIndices.push(i, j);
                return numIndices;
            }
        }
    }
    return numIndices;
}

console.log(twoSums(nums, target));



// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Solution

let nums2 = [3,2,4];
let target2 = 6;

function twoSums(nums2, target2){
    let numIndices2 = [];
    for(let i = 0; i < nums2.length; i++){
        for(let j = i + 1; j < nums2.length; j++){
            if(nums2[i] + nums2[j] === target2){
                numIndices2.push(i, j);
                return numIndices2;
            }
        }
    }
    return numIndices2;
}

console.log(twoSums(nums2, target2));