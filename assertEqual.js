// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = "🤙🤙🤙 Assertion Passed: " + actual + " === " + expected;
  } else {
    message = "💩💩💩 Assertion Failed: " + actual + " !== " + expected;
  }
  console.log(message);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1.1);
