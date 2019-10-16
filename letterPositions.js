const eqArrays = function(one,two){
  let answer = true
  let message = "";

  for(x = 0; x < one.length; x++) {
    if (one[x] !== two[x]) answer = false;
  }
  if (answer) {
    message = `🤙🤙🤙 Assertion Passed: ${one} === ${two}`;
  } else {
    message = `💩💩💩 Assertion Failed: ${one} !== ${two}`;
  }
  console.log(message);
}

const letterPositions = function (sentence){
  const results = {};
  let i = 0
    for (const letters of sentence) {
      if (letters !== " ") {
        if (results[letters]) {
          results[letters].push(i);
        } else {
          results[letters] = [i];
        } 
      }
      i += 1;
    }
  console.log(results);
  return results;
};

const findLet = letterPositions("lighthouse in the house");

eqArrays(findLet["h"],[3, 5, 15, 18])