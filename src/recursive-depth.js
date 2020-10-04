const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {         //([[],[[]]])

  calculateDepth(arr) {
    let count = 1;
    let itemsDepth = [];
    arr.forEach(item => {
      if(Array.isArray(item)) {
       return itemsDepth.push(count + this.calculateDepth(item));
      }
    });
    if(itemsDepth.length == 0) return count;
    if(itemsDepth.length >= 1) return Math.max(...itemsDepth)
  }
};