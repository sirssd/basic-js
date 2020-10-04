const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  let teamName = [];
  let newArr = arr.slice();
  newArr.forEach(item => {
    if (typeof item == 'string') {
      item = item.trim().toLowerCase()
      teamName.push(item[0]);
    }
  });
  teamName = teamName.sort();
  return teamName.join('').toUpperCase();
};
