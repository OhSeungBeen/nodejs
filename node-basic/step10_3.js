// 다른파일의 객체, 함수, 값등을 가져와 사용할 수 있다.
const { odd, even } = require('./step10_1');
const checkNumber = require('./step10_2');

function checkStringOddorEven(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}
console.log(checkNumber(10));
console.log(checkStringOddorEven('hello'));
