const sort = require("../../src/customer/sort");
const sortByName = require("../../src/customer/sortByName");
const data = require("../../src/customer/data.json");

describe("SortByName", () => {
  it("should sort by last name", () => {
    const input = [
      { firstName: "a", lastName: "b" },
      { firstName: "a", lastName: "a" },
      { firstName: "a", lastName: "c" },
    ];
    const expected = [
      { firstName: "a", lastName: "a" },
      { firstName: "a", lastName: "b" },
      { firstName: "a", lastName: "c" },
    ];
    expect(sortByName(input)).toEqual(expected);
  });
  it("should sort by last name", () => {
    const input = [
      { firstName: "b", lastName: "c" },
      { firstName: "a", lastName: "b" },
      { firstName: "a", lastName: "a" },
      { firstName: "b", lastName: "b" },
      { firstName: "c", lastName: "b" },
      { firstName: "a", lastName: "c" },
    ];
    const expected = [
      { firstName: "a", lastName: "a" },
      { firstName: "a", lastName: "b" },
      { firstName: "b", lastName: "b" },
      { firstName: "c", lastName: "b" },
      { firstName: "a", lastName: "c" },
      { firstName: "b", lastName: "c" },
    ];
    expect(sortByName(input)).toEqual(expected);
  });
});
