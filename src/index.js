/* eslint-disable no-console */

const sumOfPowersetElements = require("./powerset/sum-of-elements");

[1, 3, 5].forEach(x => {
  console.log(
    "Sum of elements for powerset of " + x + ":",
    sumOfPowersetElements(x)
  );
});
