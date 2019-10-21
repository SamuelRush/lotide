const middle = function(array){
  let newArray = [];
  let arrayLength = (array.length)/2;

  if(array.length > 2){
    if((arrayLength % 1) !== 0) {
      newArray.push(array[(arrayLength + 0.5 - 1)]);
    } else {
      newArray.push(array[arrayLength - 1]);
      newArray.push(array[(arrayLength)]);
    }
  }
return newArray;
}

/*middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]*/

module.exports = middle
