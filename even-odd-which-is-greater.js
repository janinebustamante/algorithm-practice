// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits in a string of numbers.

// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".

// Examples
// evenOrOdd("22471") ➞ "Even and Odd are the same"
// evenOrOdd("213613") ➞ "Even and Odd are the same"
// evenOrOdd("23456") ➞ "Even is greater than Odd"

// Notes
// The input will be a string of numbers.

//PSEUDOCODE:
//turn string to number
//separate number to single digits (per element)
//loop on all digits
//make counter for even and odd
//if even, add to even counter
//if odd, add to odd counter
//get total of even and odd counter
//compare even and odd counter
//o > e = "Odd is greater than Even"
//e > o = "Even is greater than Odd"
//e === o = "Even and Odd are the same"

function evenOrOdd(str) {
  let arr = str.split("");

  let even = 0;
  let odd = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = parseInt(arr[i]);

    if (num % 2 === 0) {
      even += num;
    } else {
      odd += num;
    }
  }

  if (odd > even) {
    return "Odd is greater than Even";
  } else if (even > odd) {
    return "Even is greater than Odd";
  } else {
    return "Even and Odd are the same";
  }
}
