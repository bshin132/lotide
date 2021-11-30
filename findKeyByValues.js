const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValues = function (obj, value) {
  for (let key in obj) {
    if (obj[key] === value)
    return key;
  }
  return undefined;
}




//test
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValues(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValues(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValues;