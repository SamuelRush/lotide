/*const eqArrays = function(one,two){
  let message = "";

  if (one) {
    message = `🤙🤙🤙 Assertion Passed: ${one} === ${two}`;
  } else {
    message = `💩💩💩 Assertion Failed: ${one} !== ${two}`;
  }
  console.log(message);
}*/

const assertArraysEqual = function(one,two){
  let answer=true;
  for(x = 0; x < one.length; x++) {
    if (one[x] !== two[x]) answer = false;
  }
  return answer;
}

/*eqArrays(assertArraysEqual([1, 2, 3], [1, 2, 3]),true) // => true
eqArrays(assertArraysEqual([1, 2, 3], [3, 2, 1]),false) // => false

eqArrays(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]),true) // => true
eqArrays(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]),false) // => false*/

module.exports = assertArraysEqual


