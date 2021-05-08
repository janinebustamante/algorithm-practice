// Create a function to return the amount of potatoes there are in a string.

// Examples
// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2
// potatoes("potatoapple") ➞ 1

function potatoes(str) {
  let counter = 0;
  let potatoCounter = 0;

  for (let i = 0; i < str.length; i++) {
    let element = str[i].toLowerCase();

    if (element === "p") {
      counter = 1;
    } else if (counter === 1 && element === "o") {
      counter += 1;
    } else if (counter === 2 && element === "t") {
      counter += 1;
    } else if (counter === 3 && element === "a") {
      counter += 1;
    } else if (counter === 4 && element === "t") {
      counter += 1;
    } else if (counter === 5 && element === "o") {
      potatoCounter += 1;
      counter = 0;
    } else {
      counter = 0;
    }
  }
  return potatoCounter;
}
