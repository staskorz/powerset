const sumOfElements = require("./sum-of-elements");

describe("sum-of-elements", () => {
  it("correctly returns sum of elements for powerset of 1", () => {
    expect(sumOfElements(1)).toBe(1);
  });

  it("correctly returns sum of elements for powerset of 3", () => {
    expect(sumOfElements(3)).toBe(24);
  });

  it("correctly returns sum of elements for powerset of 5", () => {
    expect(sumOfElements(5)).toBe(240);
  });
});
