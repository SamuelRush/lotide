const eqArrays = function(one,two){
  let answer = true
  let message = "";

  for(x = 0; x < one.length; x++) {
    if (one[x] !== two[x]) answer = false;
  }
  for(x = 0; x < two.length; x++) {
    if (one[x] !== two[x]) answer = false;
  }
  return answer
}

const assertObjectsEqual = function(object1,object2) {
  const inspect = require('util').inspect;
  let passing = true;
  let message = "";

  if (Object.keys(object1).length !== Object.keys(object2).length){
    passing = false;
  }

  for (const key in object1){
    if (object1[key] !== object2[key]){
      passing = false;
    }
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])){
      const arrayTest = eqArrays(object1[key],object2[key]);
      if (arrayTest === true) {
        passing = true;
      }
    }
  }
  
    if (passing) {
      message = `🤙🤙🤙 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;
    } else {
      message = `💩💩💩 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
    }
    console.log(message);
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false