const assert = require('chai').assert;
const head = require('../head')

describe("#head", () => {
  it("returns a num [1, 2, 3]", () => {
    assert.strictEqual(head([1,2,3]), 1);
  });
  it("returns a num ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});