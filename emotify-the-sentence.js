// Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

// word	emoticon
// smile	:D
// grin	:)
// sad	:(
// mad	:P

// Examples
// emotify("Make me smile") ➞ "Make me :D"
// emotify("Make me grin") ➞ "Make me :)"
// emotify("Make me sad") ➞ "Make me :("

// Notes
// The sentence always starts with "Make me".
// Try to solve this without using conditional statements like if/else or switch.

function emotify(str) {
  let sepWord = str.split(" ");

  let obj = {
    smile: ":D",
    grin: ":)",
    sad: ":(",
    mad: ":P",
  };

  return `Make me ${obj[sepWord[2]]}`;
}
