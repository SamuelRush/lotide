const flatten = function(array){
  newArray = [];
  for (let x = 0; x < array.length; x++){
    if(Array.isArray(array[x])){
      for (let y = 0; y < array[x].length; y++){
        newArray.push(array[x][y]);
      }
    } else {
      newArray.push(array[x]);
    }
  }
  return newArray;
  //console.log(newArray);
}

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;
