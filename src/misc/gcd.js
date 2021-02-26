/*
The Greatest Common Divisor (GCD) of two positive integers a and b is the largest
of the common divisors of a and b.

For example, the GCD of 24 and 30 is 6 because, the divisors of 24 are 1, 2, 3, 4, 6, 8, 12, and 24 and the divisors of 30 are 1, 2, 3, 5, 6, 10, 15, and 30. 
The common divisors are 1, 2, 3, and 6. And 6 is the largest of these common divisors.

*/

/**
 * Implement algorithm 1 here
 */
function gcd1(a, b) {
  if (a === 0) {
    return b;
  }

  while (b !== 0) {
    const r = a % b;
    a = b;
    b = r;
  }

  return a;
}

/**
 * Implement algorithm 2 here
 */
function gcd2(a, b) {
  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  const divA = [1, a];
  const divB = [1, b];
  const common = [];

  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      divA.push(i);
    }
  }

  for (let i = 2; i < b; i++) {
    if (b % i === 0) {
      divB.push(i);
    }
  }

  for (let i = 0; i < divA.length; i++) {
    if (divB.includes(divA[i])) {
      common.push(divA[i]);
    }
  }

  let largest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < common.length; i++) {
    if (common[i] > largest) {
      largest = common[i];
    }
  }

  return largest;
}

module.exports = { gcd1, gcd2 };
