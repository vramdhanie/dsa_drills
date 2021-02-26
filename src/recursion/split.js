/**
 *
 * @param {string} text
 * @param {string} separator
 */
const split = (text, separator) => {
  // find the index of the first occurrence of separator
  let index = text.indexOf(separator);

  // base case
  if (index === -1) {
    return [text];
  }

  // find the substrings
  let start = text.substring(0, index);
  let rest = text.substring(index + 1);

  // recursive call
  let restSolution = split(rest, separator);

  // insert the first substring
  restSolution.unshift(start);

  return restSolution;
};

module.exports = split;
