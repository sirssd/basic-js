module.exports = function transform(arr) {
  if (!Array.isArray(arr)) return new Throw('It is not Array');
  let arrCopy = arr.slice();
  let transArr = [];
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] === '--discard-next') {
      if(i + 1 >= arrCopy.length) break;
      arrCopy[i + 1] = "s0_disc";
    } else if (arrCopy[i] === '--discard-prev') {
      if(i - 1 < 0) continue;
      transArr[i - 1] = "s0_disc";
    } else if (arrCopy[i] === '--double-next') {
      if(i + 1 > arrCopy.length) break;
      transArr[i] = arrCopy[i + 1];
    } else if (arrCopy[i] === '--double-prev') {
      if(i - 1 < 0) continue;
      transArr[i] = transArr[i - 1];
    } else {
      transArr.push(arrCopy[i])
    }
  };

  arrCopy = transArr.slice();
  transArr = [];

  arrCopy.forEach(item => {
    if (item != 's0_disc' && item != undefined) transArr.push(item);
  });
  
  return transArr;
};

