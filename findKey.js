const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `🤙🤙🤙 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `💩💩💩 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};

const objData = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const findKey = function(object,callback) {
  let message = undefined;
  for (const keys in object){
    if (callback(objData[keys]["stars"])){
      message = keys;
      break;
    }
  }
  return message;
//console.log(message); //return noma
}

assertEqual(findKey(objData,(i) => {
  const findWhat = 2;
  return i === findWhat;
}),"noma")