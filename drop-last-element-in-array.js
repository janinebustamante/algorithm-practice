// According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Examples
// dropRight([1, 2, 3]) ➞ [1, 2]
// dropRight([1, 2, 3], 2) ➞ [1]
// dropRight([1, 2, 3], 5) ➞ []
// dropRight([1, 2, 3], 0) ➞ [1, 2, 3]

// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.

function dropRight(arr, num = 1) {
  if (arr.length > num) {
    arr.splice(arr.length - num, num);
    return arr;
  } else {
    return [];
  }
}
