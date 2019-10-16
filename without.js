const without = function(first,second){
let newArray = [];
  for(x=0; x < first.length; x++){
    let add = true;
    for (y=0; y < second.length; y++){
      if (first[x] === second[y]) {
        add = false;
      }
    }
    if (add) {
      newArray.push(first[x]);
    }
  }
  console.log(newArray);
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
without(words, ["hello", "world", "lighthouse"]);
