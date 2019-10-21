/*const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `🤙🤙🤙 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `💩💩💩 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};*/

const tail = function(arrays) {
  let array2 = [];
  for (let x = 1; x < arrays.length; x++) {
    array2.push(arrays[x]);
  }
  return array2;
};

// TEST CODE
/*assertEqual(tail([5,6,7])[0], 6);
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Hello");
assertEqual(tail([5,7])[0], 7);
assertEqual(tail([])[0], "Hello");*/

module.exports = tail;