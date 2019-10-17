const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const takeUntil = function(array, callback){
  const newArray = [];
  for (const char of array){
    if (callback(char)) {break;}
    newArray.push(char);
  }
  return newArray
}



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

eqArrays(takeUntil(data1,(number) => {
  const findWhat = -1;
  return number === findWhat;
}),[1, 2, 5, 7, 2]);