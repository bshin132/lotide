const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns a middle number", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  })
  it("returns a middle number", () => {
    assert.deepEqual(middle([1,2]), []);
  })
  it("returns a middle number", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8]), [3,4]);
  })
})
