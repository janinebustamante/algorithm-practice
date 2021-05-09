// Create a function that takes a string and returns the number (count) of vowels contained within it.

// Examples
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1
// countVowels("Prediction") ➞ 4

// Notes
// a, e, i, o, u are considered vowels (not y).
// All test cases are one word and only contain letters.

function countVowels(str) {
  let strCleaned = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < strCleaned.length; i++) {
    if (
      strCleaned[i] === "a" ||
      strCleaned[i] === "e" ||
      strCleaned[i] === "i" ||
      strCleaned[i] === "o" ||
      strCleaned[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}
