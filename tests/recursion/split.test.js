const split = require("../../src/recursion/split");

describe("Split", () => {
  it("should return [] for empty string", () => {
    expect(split("", "-")).toEqual([""]);
  });

  it("should return whole string for no separator", () => {
    expect(split("2023", "-")).toEqual(["2023"]);
  });

  it("should split string", () => {
    expect(split("4-8-2023", "-")).toEqual(["4", "8", "2023"]);
  });
});
