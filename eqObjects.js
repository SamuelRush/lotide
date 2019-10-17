const eqArrays = function(one,two){
  let answer = true
  let message = "";

  for(x = 0; x < one.length; x++) {
    if (one[x] !== two[x]) answer = false;
  }
  for(x = 0; x < two.length; x++) {
    if (one[x] !== two[x]) answer = false;
  }

  if (answer) {
    message = `🤙🤙🤙 Assertion Passed: ${one} === ${two}`;
  } else {
    message = `💩💩💩 Assertion Failed: ${one} !== ${two}`;
  }
  return answer
}

const eqObjects = function (object1,object2){
  let passing = true;

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
  console.log(passing);
  return passing;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false