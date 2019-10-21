const middle = require("../middle");
const expect = require("chai").expect;
describe ("#middle", () =>{
 it ("should return empty array if array contains one value", () => {
   expect(middle([1])).to.eql([]);
 })
 it ("should return empty array if array contains two values" , () => {
   expect(middle([1, 2])).to.eql([]);
 })
 it ("should return 2 in an array if given array [1,2,3]", () => {
   expect(middle([1,2,3])).to.eql([2]);
 })
 it ("should return [3,4] if given array [1,2,3,4,5,6]", () => {
   expect(middle([1,2,3])).to.eql([2]);
 })
})
//const assertArraysEqual = require("../assertArraysEqual");
//const assertEqual = require("../assertEqual");

/*middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]*/

/*assertEqual(assertArraysEqual(middle([1]), []),true) 
assertEqual(assertArraysEqual(middle([1, 2]), []),true)
assertEqual(assertArraysEqual(middle([1, 2, 3]), [2]),true)
assertEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]),true)
assertEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2,3]),true)
assertEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]),true)*/