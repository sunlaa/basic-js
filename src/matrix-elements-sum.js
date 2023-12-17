const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let columns = matrix[0].length;
  let rows = matrix.length;
  let result = 0;
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (matrix[j][i] !== 0) {
        result += matrix[j][i];
      } else break;
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
