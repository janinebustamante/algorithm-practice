// Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

// Examples
// numberSquares(2) ➞ 5
// numberSquares(4) ➞ 30
// numberSquares(5) ➞ 55

// Notes
// Input is a positive integer.
// Square pyramidal number.

function numberSquares(num) {
  let squareCount = (num * (num + 1) * (2 * num + 1)) / 6;
  return squareCount;
}
