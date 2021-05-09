// Create a function that takes a number as an argument and returns the highest digit in that number.

// Examples
// highestDigit(379) ➞ 9
// highestDigit(2) ➞ 2
// highestDigit(377401) ➞ 7

function highestDigit(number) {
  let numsArr = number.toString().split("");
  let highestNum = 0;

  for (let i = 0; i < numsArr.length; i++) {
    if (parseInt(numsArr[i]) > highestNum) {
      highestNum = numsArr[i];
    }
  }
  return highestNum;
}
