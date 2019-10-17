const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
    results.push(callback(item));
  }
  return results;
}

//console.log(map(words,function(nLetter){
//   return nLetter.substring(0,1);
//}));

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

eqArrays(words, map(words,function(nLetter){
   return nLetter;
})); 



