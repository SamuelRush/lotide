// FUNCTION IMPLEMENTATION

/*const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `🤙🤙🤙 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `💩💩💩 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};*/

const eqArrays = function(one,two){
  for(x = 0; x < one.length; x++) {
    if (one[x] !== two[x]) return false;
  }
  return true
}

// TEST CODE
/*assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false*/

module.exports = eqArrays;

