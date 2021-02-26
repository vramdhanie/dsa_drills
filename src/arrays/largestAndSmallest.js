function largestAndSmallestSort(numbers) {
  if (!numbers || numbers.length === 0) {
    return [];
  }
  numbers.sort();
  return [numbers[0], numbers[numbers.length - 1]];
}

function largestAndSmallestIterate(numbers) {
  if (!numbers || numbers.length === 0) {
    return [];
  }
  let largest = Number.NEGATIVE_INFINITY;
  let smallest = Number.POSITIVE_INFINITY;
  numbers.forEach((e) => {
    if (e > largest) {
      largest = e;
    }

    if (e < smallest) {
      smallest = e;
    }
  });

  return [smallest, largest];
}

module.exports = { largestAndSmallestIterate, largestAndSmallestSort };
