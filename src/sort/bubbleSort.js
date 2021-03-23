function bubbleSort(compare, elements) {
  if (Array.isArray(elements)) {
    let inOrder;

    do {
      inOrder = true; // Assume that the array is in order

      for (let index = 0; index < elements.length - 1; index++) {
        const leftElement = elements[index];
        const rightElement = elements[index + 1];

        if (compare(leftElement, rightElement) > 0) {
          elements[index] = rightElement;
          elements[index + 1] = leftElement;
          inOrder = false;
        }
      }
    } while (inOrder === false);
  }
  return elements;
}

function compare(left, right) {
  console.log("compare", left, "to", right);
  return left - right;
}

const elements = [4685, 880, 808, 471, 394];
console.log(bubbleSort(compare, elements));
