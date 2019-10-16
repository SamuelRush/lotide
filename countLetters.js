const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `🤙🤙🤙 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `💩💩💩 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};

const countLetters = function (string){
  const letterCount = {};
  for (const letters of string) {
    if (letterCount[letters]) {
      letterCount[letters] += 1
    } else {
      letterCount[letters] = 1
    }
  }
  return letterCount;
};

const nLetters = countLetters("lighthouse in the house")

assertEqual(nLetters["e"], 3);
