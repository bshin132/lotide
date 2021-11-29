const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else {
    if (array.length % 2 === 0) {
      let mid = array.length / 2;
      return [array[mid -1], array[mid]];
    } else {
      return [array[Math.floor(array.length / 2)]];
    }
  }
};

module.exports = middle;