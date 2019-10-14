const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `🤙🤙🤙 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `💩💩💩 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};

const head = function(arrays) {
  actual = arrays[0];
  return arrays[0];
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), "Hello");