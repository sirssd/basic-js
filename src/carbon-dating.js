const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity != 'string' || sampleActivity > 15 || sampleActivity <= 0 || isNaN(+sampleActivity)) return false;
  const SAMPLE_ACTIVITY = +sampleActivity;
  let t = Math.ceil(((MODERN_ACTIVITY/SAMPLE_ACTIVITY)/0.693) * HALF_LIFE_PERIOD);

  return t;
};
