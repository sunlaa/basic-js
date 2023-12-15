const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let obj = {};
  for (let str of domains) {
    let parts = str.split('.').reverse();
    let currentStr = '';
    for (let part of parts) {
      currentStr += `.${part}`
      if (!obj[currentStr]) {
        obj[currentStr] = 1;
      } else {
        obj[currentStr]++;
      }
    }
  }

  return obj;
}

module.exports = {
  getDNSStats
};
