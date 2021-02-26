/**
 * Find the missing number in the `numbers` array
 * using a brute force approach.
 * @param {array} numbers
 */
function missingNumberBruteForce(numbers) {
  let n = numbers.length + 1;
  for (let i = 1; i <= n; i++) {
    if (!numbers.includes(i)) {
      return i;
    }
  }
  return -1; // no missing number found
}

/**
 * Find the missing numbers in the `numbers` array
 * using the sum and subtract approach.
 * @param {array} numbers
 */
function missingNumberSum(numbers) {
  let n = numbers.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = numbers.reduce((a, c) => a + c);
  return expectedSum - actualSum;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
