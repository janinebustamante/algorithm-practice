// A half life is the amount of time for half of a radioactive substance to decay.

// After 1 half life, 50% of a substance will be left.
// After 2 half lives, 25% of a substance will be left.
// After 3 half lives, 12.5% of a substance will be left, etc...

// Create a function which calculates the remaining mass and the number of years that it took for the substance to decay. You will be given:

// The mass of the substance.
// The time in years for a halflife to elapse.
// The number of half lives.

// Worked Example
// halflifeCalculator(1000, 5730, 2) ➞ [250, 11460]

// // There are 2 half lives, so the mass decays from 1000 to 500, then from 500 to 250.
// // Each halflife is 5730 years, and since there were 2, it took 11460 years in total.

// Examples
// halflifeCalculator(1600, 6, 3) ➞ [200, 18]
// halflifeCalculator(13, 500, 1) ➞ [6.5, 500]
// halflifeCalculator(100, 35, 5) ➞ [3.125, 175]

// Notes
// Round the final mass to three decimal places.
// All inputs are positive numbers.
// Return the final mass first, then the number of years.

function halflifeCalculator(mass, hlife, n) {
  let result1 = mass / 2 ** n;
  let result2 = hlife * n;

  return [result1, result2];
}
