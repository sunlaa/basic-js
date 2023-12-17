const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }

  let copy = [...arr];
  let skip;

  for (let i = 0; i < copy.length; i++) {
    if (copy[i] === '--discard-next') {
      if (copy[i + 1] !== undefined) {
        copy.splice(i, 2);
        i--;
        skip = copy[i];
      } else {
        copy.splice(i, 1);
        i--;
      }
    } else if (copy[i] === '--discard-prev') {
      if (copy[i - 1] !== undefined && skip !== copy[i - 1]) {
        copy.splice(i - 1, 2);
        i -= 1; 
      } else {
        copy.splice(i, 1);
        i -= 1; 
      }
    } else if (copy[i] === '--double-next') {
      if (copy[i + 1] !== undefined) {
        copy.splice(i, 1, copy[i + 1])
      } else {
        copy.splice(i, 1);
      }

    } else if (copy[i] === '--double-prev') {
      if (copy[i - 1] !== undefined && skip !== copy[i - 1]) {
        copy.splice(i, 1, copy[i - 1]);
        i--;
      } else {
        copy.splice(i, 1);
        i--;
      }
    }
  }
  return copy;
}

module.exports = {
  transform
};
