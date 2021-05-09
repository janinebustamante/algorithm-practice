// Given an array of numbers, return an array which contains all the even numbers in the orginal array, which also have even indices.

// Examples
// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]
// getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]
// getOnlyEvens([1, 2, 3, 4, 5]) ➞ []

// Notes
// Arrays start at index 0.

function getOnlyEvens(nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if ([i] % 2 === 0 && nums[i] % 2 === 0) {
      arr.push(nums[i]);
    }
  }
  return arr;
}
