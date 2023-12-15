const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr = `${n}`.split('');
  let int = 0;

  for (let i = 0; i < arr.length; i++) {
    let changable = arr.slice();
    changable.splice(i, 1);
    let compare = +changable.join('');
    if (compare > int) {
      int = compare;
    }
  }

  return int;
}

module.exports = {
  deleteDigit
};
