/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  if (word.length <= 1) {
    return true;
  }
  const counts = word.split("").reduce((acc, curr) => {
    if (acc.has(curr)) {
      acc.set(curr, acc.get(curr) + 1);
    } else {
      acc.set(curr, 1);
    }
    return acc;
  }, new Map());

  let odds = 0;
  for (let v of counts.values()) {
    odds += v % 2;
  }
  return odds <= 1;
}

module.exports = permutationPalindrome;
