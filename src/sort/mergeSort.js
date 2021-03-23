function merge(compare, left, right) {
  const sorted = [];

  while (left.length && right.length) {
    const comparison = compare(left[0], right[0]);

    if (comparison <= 0) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted.concat(left, right);
}

function mergeSort(compare, elements) {
  if (Array.isArray(elements)) {
    if (elements.length <= 1) {
      return elements;
    }

    const middle = Math.floor(elements.length / 2);

    const leftElements = elements.slice(0, middle);
    const rightElements = elements.slice(middle);

    const leftElementsSorted = mergeSort(compare, leftElements);
    const rightElementsSorted = mergeSort(compare, rightElements);

    return merge(compare, leftElementsSorted, rightElementsSorted);
  }
  return elements;
}

function compare(left, right) {
  console.log("compare", left, "to", right);
  return left - right;
}

const arrayToSort = [5, 2, 8, 15, 3];
const result = mergeSort(compare, arrayToSort);
console.log(result);
