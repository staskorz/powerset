const numSubnets = require("./num-subsets");

const sumOfElements = x => {
  if (x === 1) {
    return 1;
  } else {
    const xMinusOne = x - 1;

    return sumOfElements(xMinusOne) * 2 + numSubnets(xMinusOne) * x;
  }
};

module.exports = sumOfElements;
