/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
function reverse(text) {
  if (!text || text.length === 0) {
    return "";
  }
  let firstCharacter = text[0];
  let rest = text.slice(1);
  let reverseRest = reverse(rest);
  return reverseRest + firstCharacter;
}

module.exports = reverse;
