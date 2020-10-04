const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) return new Throw('It is not Array');
  let arrCopy = arr.slice();
  let transArr = [];
  for (let i = 0; i < arrCopy.length; i++) {
    if (arr[i] === '--discard-next') arrCopy.splice(i + 1, 1);
    if (arr[i] === '--discard-prev') transArr.splice(-1, 1);
    if (arr[i] === '--double-next') transArr.push(arrCopy[i + 1]);
    if (arr[i] === '--double-prev') transArr.push(arrCopy[i - 1]);
  };
  return transArr;
};
