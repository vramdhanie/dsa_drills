const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */
function sortByName(customers) {
  const byFirstName = sort(
    (a, b) => a.firstName.localeCompare(b.firstName),
    customers
  );
  return sort((a, b) => a.lastName.localeCompare(b.lastName), byFirstName);
}

module.exports = sortByName;
