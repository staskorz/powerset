const numSubsets = require("./num-subsets");

describe("num-subsets", () => {
  it("returns correct number of subsets for powerset of 1", () => {
    expect(numSubsets(1)).toBe(2);
  });

  it("returns correct number of subsets for powerset of 5", () => {
    expect(numSubsets(5)).toBe(32);
  });
});
