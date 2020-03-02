// var, const, let

if (true) {
  var x = 3;
}
console.log(x);

// error
// 블록 밖에서는 const 접근 불가능
/* if (true) {
  const y = 3;
}
console.log(y); */

// error
// const는 상수이기때문에 값이 할당되면 바꿀 수 없다.
/* const a = 0;
a = 1; */

const g = { a: 1, b: 2, c: 3 };
// error 객체는 바꿀 수 없지만 객체안의 값은 바꿀 수 있다.
// g = [1, 2, 3];
g.a = 3;
g.b = 5;
console.log(g);

const h = [1, 2, 3, 4, 5];
// error 마찬가지로 배열은 바꿀 수 없지만 배열안의 값은 바꿀 수 있따.
// h = 123;
h[0] = true;
h1[1] = false;
console.log(h);

// let은 값을 바꿀 수 있다.
const a = 1;
const b = 2;
let c = 0;
c = 1;
console.log(a + b + c);
