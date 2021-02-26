/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
  const counts = word.split("").reduce((acc, curr) => {
    if (acc.has(curr)) {
      acc.set(curr, acc.get(curr) + 1);
    } else {
      acc.set(curr, 1);
    }
    return acc;
  }, new Map());
  for (let [k, v] of counts.entries()) {
    if (v === 1) {
      return k;
    }
  }
  return null;
}

module.exports = firstSingleCharacter;
