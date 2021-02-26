/**
 * You have been asked to help organize tours for groups of school children
 * to view the Butterfly Pavilion at the museum. To your surprise the exhibit
 * is quite popular and many groups have registered an interest in the tour.
 *
 * You decide that you will have to hold the tours across two days to accommodate the
 * groups. You need to select a number of groups to visit on the first day
 * and a number of groups to visit on the second day such that each day has
 * roughly the same number of visitors.
 *
 * You have the sizes of each group recorded in an array. You wish to select
 * the point at which to split the array so that the difference between the sums
 * of each part of the array is minimum.
 *
 * For example, suppose the following array of group sizes were given.
 *
 * [4, 12, 17, 8, 13, 24, 9]
 *
 * If you split at index 2, the first part of the array contains 4, 12, and 17 giving the sum 33.
 * The second part of the array contains the numbers 8, 13, 24, and 9 giving the sum 54 giving the
 * sum 54. The difference is 54 - 33 = 21.
 *
 * However, if you split at index 3, the first part of the array contains 4, 12, 17, and 8
 * giving the sum 41 and the second part of the array contains 13, 24, and 9 giving the sum 46.
 * The difference here is 46 - 41 = 5.
 *
 * The objective is to find the smallest possible difference.
 *
 */

function splitSum1(tours) {
  // find the sum of the whole array
  const total = tours.reduce((a, c) => a + c, 0); // O(n)

  let preSum = 0;
  let postSum = total;
  let smallest = Number.POSITIVE_INFINITY;
  // for loop goes from second element to second to last element
  for (let i = 0; i < tours.length - 1; i++) {
    preSum = preSum + tours[i];
    postSum = postSum - tours[i];

    const difference = Math.abs(preSum - postSum);
    if (difference < smallest) {
      smallest = difference;
    }
  }
  return smallest;
}

function splitSum2(tours) {
  let smallest = Number.POSITIVE_INFINITY;
  for (let k = 0; k < tours.length; k++) {
    let preSum = tours.slice(0, k + 1).reduce((a, c) => a + c, 0);
    let postSum = tours.slice(k + 1).reduce((a, c) => a + c, 0);
    const difference = Math.abs(preSum - postSum);
    if (difference < smallest) {
      smallest = difference;
    }
  }
  return smallest;
}

module.exports = { splitSum1, splitSum2 };
