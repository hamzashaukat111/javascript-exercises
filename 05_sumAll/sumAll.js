const sumAll = function (x, y) {
  // let num;
  if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
  if (x < 0 || y < 0) return "ERROR";
  const bignum = x > y ? x : y;
  const smallnum = x < y ? x : y;
  let sum = 0;

  for (let i = smallnum; i <= bignum; i++) {
    sum = sum + i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
