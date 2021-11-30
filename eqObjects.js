const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  let keysObj1 = Object.keys(object1);
  let keysObj2 = Object.keys(object2);
  if (keysObj1.length !== keysObj2.length) {
    return false;
  } else {
    for (let key of keysObj1) {
      let value1 = object1[key];
      let value2 = object2[key];
      if (value2 === undefined) {
        return false;
      }

      if (value1 instanceof Array) {
        if (!eqArrays(value1, value2)) {
          return false;
        }
      } else if (value1 instanceof Object) {
        if (!eqObjects(value1, value2)) {
          return false;
        }
      } else {
        if (value1 !== value2) {
          return false;
        }
      }
    }
    return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); 

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); 


module.exports = eqObjects;