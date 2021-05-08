1. Given a sentence, create a function to determine the number of vowels there are inthe sentence.


create function
assign sentence as parameter
loop through the sentence indices
    turn everything in lowercase, assign in variable
    check if a,e,i,o,u
    assign variable for vowel count
    if true, +1 in vowel count
    if false, continue to next index
return final count of vowels


function countVowels(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        let sentenceLower = sentence[i].toLowerCase();
        if (sentenceLower === 'a' || sentenceLower === 'e' || sentenceLower === 'i' || sentenceLower === 'o' || sentenceLower === 'u') {
            count ++;
        }
    }
    return count;
}
console.log(countVowels("Hello everyone!"));



2. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.


create a sum function
make variable a given number as argument (nums)
make variable currentSum
loop from 1 to given number
    get index, add to currentSum, continue
    add next index to currentSum, continue until last of length
return currentSum


let sum = (nums) => {
    let currentSum = 0;
    for (let i = 0; i <= nums; i++) {
        currentSum += i;
    }
    return currentSum;
}

console.log(sum(4));
console.log(sum(13));
console.log(sum(600));



3. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.


create function
create empty array of numbers
loop through array of numbers
    get 1st index, continue
    get 2nd index, compare greater than or less than 1st index
    assign lowest number to variable
    assign highest number to variable
    get the index with lowest index and highest index and assign to respective variable
return index 0 for min, index 1 for max

let minMax = (array) => {
    let min = array[0];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        } else if (array[i] > max) {
            max = array[i];
        }
    }
    return [min, max];
}

console.log(minMax([1,2,3,4,5]));



4. This challenge will help you interpret mathematical relationships both algebraically and geometrically. Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.


1 => 6
2 => 11
3 => 16
4 => 21
5 => 26
6 => 31


let match = (steps) => {
    if (steps !== 0) {
        return steps * 6 - (steps - 1);
    } else {
        return 0;
    }
}

console.log(match(1));
console.log(match(4));
console.log(match(87));



5. The left shift operation is similar to multiplication by powers of two.
Sample calculation using the left shift operator (<<):

10 << 3 = 10 * 2^3 = 10 * 8 = 80
-32 << 2 = -32 * 2^2 = -32 * 4 = -128
5 << 2 = 5 * 2^2 = 5 * 4 = 20

Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

let shiftToLeft = (x, y) => {
    return x * (2 ** y);
}

console.log(shiftToLeft(5, 2)); //20
console.log(shiftToLeft(10, 3)); //80
console.log(shiftToLeft(-32, 2)); //-128
console.log(shiftToLeft(-6, 5)); //-192
console.log(shiftToLeft(12, 4)); //192
console.log(shiftToLeft(46, 6)); //2944



6. Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.



let d = new Date(2013, 11, 24)

timeForMilkAndCookies(d); //true
timeForMilkAndCookies(new Date(2013, 0, 23)); //false
timeForMilkAndCookies(new Date(3000, 11, 24)); //true



let timeForMilkAndCookies = (d) => {
    if (d.getDate() === 24 && d.getMonth() === 11) {
        return true;
    } else {
        return false;
    }
}


7. Fruit salads are served best when the fruits are sliced and diced into small chunks!

For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.

Worked Example
fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// Final string: "apargrapepesple"
Examples
fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

fruitSalad(["raspberries", "mango"]) ➞ "erriesmangoraspb"

fruitSalad(["banana"]) ➞ "anaban"
Notes
If a fruit has an odd number of letters, make the right side larger than the left.
For example: "apple" will be sliced into "ap" and "ple".
All fruits will be given in lowercase.


// NO ANSWER YET



8. Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

If f returns the larger number, return the string f.
If g returns the larger number, return the string g.
If the functions return the same number, return the string neither.

Examples
whichIsLarger(() => 5, () => 10) ➞ "g"
whichIsLarger(() => 25,  () => 25) ➞ "neither"
whichIsLarger(() => 505050, () => 5050) ➞ "f"

Notes
This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).


let f = () => {
    let num1;
    return num1;
}

let g = () => {
    let num2;
    return num2;
}

let whichIsLarger = (f,g) => {
    if (f() > g()){
        return "f"
    } else if (f() < g()) {
        return "g"
    } else {
        return "neither"
    }
}

whichIsLarger(() => 5, () => 10) ➞ "g"
whichIsLarger(() => 25,  () => 25) ➞ "neither"
whichIsLarger(() => 505050, () => 5050) ➞ "f"


9. Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

Examples
binary(1) ➞ "1"
// 1*1 = 1

binary(5) ➞ "101"
// 1*1 + 1*4 = 5

binary(10) ➞ "1010"
// 1*2 + 1*8 = 10
Notes
Numbers will always be below 1024 (not including 1024).
The && operator could be useful.
The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.
If a binary conversion for 0 is attempted, return "0".



//NO ANSWER YET


10. Create a function that returns true if the first array can be nested inside the second.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.
Examples
canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false
Notes
Note the strict inequality (see example #3).

let canNest = (arr1, arr2) => {
    let arr1Min = arr1[0];
    let arr1Max = arr1[0];
    for (let i=0; i < arr1.length; i++) {
        if (arr1[i] < arr1Min) {
            return arr1Min = arr1[i];
        } else if (arr1[i] > arr1Max) {
            return arr1Max = arr1[i];
        }
    }
    let arr1MinMax = [arr1Min, arr1Max];
    arr1MinMax;

    let arr2Min = arr2[0];
    let arr2Max = arr2[0];
    for ( let i=0; i < arr2.length; i++) {
        if (arr2[i] < arr2Min) {
            return arr2Min = arr2[i];
        } else if (arr2[i] > arr2Max) {
            return arr2Max = arr2[i];
        }
    }
    let arr2MinMax = [arr2Min, arr2Max];
    arr2MinMax;

    if (arr1MinMax[0] > arr2MinMax[0] && arr1[1] < arr2[1]) {
        return true
    } else {
        return false
    }
}

//NO ANSWER YET