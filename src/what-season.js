const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) return 'Unable to determine the time of year!';
  Date.prototype.toString.call(date);
  let month = date.getMonth() + 1;
  if (month <= 2 || month == 12) return 'winter';
  if (month <= 5 && month > 2) return 'spring';
  if (month <= 8 && month > 5) return 'summer';
  if (month <= 11 && month > 8) return 'autumn';
};

