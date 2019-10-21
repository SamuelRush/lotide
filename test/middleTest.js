const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const assertEqual = require("../assertEqual");

/*middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]*/

assertEqual(assertArraysEqual(middle([1]), []),true) 
assertEqual(assertArraysEqual(middle([1, 2]), []),true)
assertEqual(assertArraysEqual(middle([1, 2, 3]), [2]),true)
assertEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]),true)
assertEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2,3]),true)
assertEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]),true)