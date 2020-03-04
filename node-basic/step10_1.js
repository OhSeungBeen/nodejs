// 노드 모듈 시스템
// exports

const odd = '홀수입니다';
const even = '짝수입니다.';

// ES5
// module.exports = {
//   odd: odd,
//   even: even
// };

// ES6
module.exports = {
  odd,
  even
};

// exports를 쓰지않고 모듈객체에 담을 수 있다.
exports.odd = odd;
exports.even = even;
