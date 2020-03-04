//Node내장객체 - console 객체

console.log(console);

const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: 'value'
    }
  }
};

console.time('시간측정');

console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을수 있습니다.');
console.log(string, number, boolean);
console.error('에러 메세지는 console.error에 담아주세요');
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.timeEnd('시간측정');

function b() {
  console.trace('에러 위치 추적');
}
function a() {
  b();
}
a();
