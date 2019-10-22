const flatten = require("../flatten");
//const assert = require("chai").assert;
const expect = require("chai").expect;

describe("#flatten", () =>{
  it ("gets rid of nested arrays for ex [1, 2, [3, 4], 5, [6]] turns to [1,2,3,4,5,6]", () =>{
    expect([1,2,3,4,5,6]).to.eql(flatten([1, 2, [3, 4], 5, [6]]))
    //assert.equal(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6])
  });
});