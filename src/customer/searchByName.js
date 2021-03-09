/**
 * return + if a > b, - is a < b and 0 if a == b
 * @param {object} a The key
 * @param {object} b The current object in the array
 */
function compare(a, b) {
  let comp = a.lastName.localeCompare(b.lastName);
  if (comp === 0) {
    return a.firstName.localeCompare(b.firstName);
  } else {
    return comp;
  }
}

/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */
function searchByName(firstName, lastName, customers) {
  let lowerIndex = 0;
  let upperIndex = customers.length - 1;

  while (lowerIndex <= upperIndex) {
    const index = Math.floor((upperIndex + lowerIndex) / 2);

    const comparison = compare({ firstName, lastName }, customers[index]);

    if (comparison > 0) {
      lowerIndex = index + 1;
    }

    if (comparison === 0) {
      return index;
    }

    if (comparison < 0) {
      upperIndex = index - 1;
    }
  }
  return -1;
}

module.exports = searchByName;
