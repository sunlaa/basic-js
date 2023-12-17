const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let rows = matrix.length;
  let columns = matrix[0].length;
  let result = Array.from({ length: rows }, () => Array(columns).fill(0));

  function isValid(i, j) {
    return i >= 0 && i < rows && j >= 0 && j < columns;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j]) {
        for (let ni = i - 1; ni <= i + 1; ni++) {
          for (let nj = j - 1; nj <= j + 1; nj++) {
            if (isValid(ni, nj) && !(ni === i && nj === j)) {
              result[ni][nj]++
            }
          }
        }
      }
    }
  } 

  return result;
}

module.exports = {
  minesweeper
};
