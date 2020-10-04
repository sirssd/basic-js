const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  if (typeof backyard != 'object' || backyard.length == 0) return 0;
  let number = 0;
  let count = 0;
  let newArr = [];
  newArr = newArr.concat(...backyard);
  newArr.forEach(item => {
    if (item == '^^') count++;
  });
  return count;
};
