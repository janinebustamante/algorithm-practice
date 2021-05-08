// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   { name: "lemonade", price: 50 },
//   { name: "lime", price: 10 },
// ];
// The output of the sorted drinks object will be:

// Examples
// sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

function sortDrinkByPrice(drinks) {
  drinks.sort((a, b) => {
    if (a.price > b.price) {
      return 1;
    } else if (a.price < b.price) {
      return -1;
    } else {
      return 0;
    }
  });
  return drinks;
}

// [a,b]

// a BEFORE b => -1

// [b,a] => 1
// [a,b] => -1
// remain = 0

// [a,b] [-1,1]

// a = -1
// b = 1
