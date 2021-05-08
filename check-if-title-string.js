// Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

// Examples
// checkTitle("A Mind Boggling Achievement") ➞ true
// checkTitle("A Simple Java Script Program!") ➞ true
// checkTitle("Water is transparent") ➞ false

function checkTitle(title) {
  let titleArr = title.split(" ");

  for (let i = 0; i < titleArr.length; i++) {
    if (titleArr[i][0] !== titleArr[i][0].toUpperCase()) {
      return false;
    }
  }
  return true;
}
