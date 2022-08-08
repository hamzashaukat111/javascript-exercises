const removeFromArray = function (ok, ...x) {
  //   const arr = x[0];
  //   const toRemove = x[1];
  const newArr = [];

  //   const toRemove = [...x];
  for (const i of ok) {
    if (!x.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
