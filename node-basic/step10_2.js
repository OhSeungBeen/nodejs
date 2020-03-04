// 노드 모듈 시스템
// require

// // 비구조화할당 x
// const variable = require('./step10');
// console.log(variable.odd);
// console.log(variable.even);

// 비구조화할당
const { odd, even } = require('./step10_1');

function checkOddorEven(num) {
  if (num % 2) {
    return odd;
  }
  return even;
}

module.exports = checkOddorEven;
