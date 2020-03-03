// rest 문법
// ... 나머지
const n = (x, ...y) => console.log(x, y);

console.log(n(5, 6, 7, 8, 9));

// arguments
// ES5
function o() {
  console.log(arguments);
}

console.log(1, 2, 3, 4, 5);

//ES6
const p = (...rest) => console.log(rest);
console.log(p(5, 6, 7, 8, 9));
