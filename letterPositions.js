const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertation Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🆘🆘🆘 Assertation Failed: ${arr1} !== ${arr2}`);
  }
};


const letterPositions = function (sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {           //count the # of times that the character occurs
    let position = i;
    let letter = sentence[i]

    if (letter !== ' ') {

      if (results[letter]) {
        results[letter].push(i)
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));

console.log(letterPositions("lighthouse in the house"));  
// assertArraysEqual(letterPositions("hello").e, [1]);
// //letterPositions("hello");
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2,3]);

module.exports = letterPositions;