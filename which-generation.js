// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

// Examples
// generation(2, "f") ➞ "granddaughter"
// generation(-3, "m") ➞ "great grandfather"
// generation(1, "f") ➞ "daughter"

// Notes
// Check the Resources tab for helpful hints.

// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter

function generation(x, y) {
  if (x === -3) {
    if (y === "f") {
      return "great grandmother";
    } else if (y === "m") {
      return "great grandfather";
    }
  } else if (x === -2) {
    if (y === "f") {
      return "grandmother";
    } else if (y === "m") {
      return "grandfather";
    }
  } else if (x === -1) {
    if (y === "f") {
      return "mother";
    } else if (y === "m") {
      return "father";
    }
  } else if (x === 1) {
    if (y === "f") {
      return "daughter";
    } else if (y === "m") {
      return "son";
    }
  } else if (x === 2) {
    if (y === "f") {
      return "granddaughter";
    } else if (y === "m") {
      return "grandson";
    }
  } else if (x === 3) {
    if (y === "f") {
      return "great granddaughter";
    } else if (y === "m") {
      return "great grandson";
    }
  } else if (x === 0) {
    if (y === "f" || y === "m") {
      return "me!";
    }
  } else {
    return "undefined";
  }
}
