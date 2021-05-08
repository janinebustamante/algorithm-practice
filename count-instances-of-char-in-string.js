// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4

// Notes
// Your output must be case-sensitive (see second example).

function charCount(myChar, str) {
  //   let myCharCleaned = myChar.toLowerCase();
  //   let strCleaned = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (myChar === str[i]) {
      count++;
    }
  }
  return count;
}
