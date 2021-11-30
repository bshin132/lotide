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



const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["light","house","are","great"];
const mapfunction = word => word[0];

const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item))
  }
  return results;
}

const results1 = map(words, word => word[0])
console.log(results1)


assertArraysEqual(map(words2,mapfunction),['l','h','a']);
assertArraysEqual(map(words,mapfunction),['g','c','t','m','t']);

module.exports = map;