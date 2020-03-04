// 내장모듈 - fs (동기 방식)

// 동기방식으로 변경1 .. callback ...callback...callback ...
const fs = require('fs');

console.log('시작');
fs.readFile('./step23_1.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());
  fs.readFile('./step23_1.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log('2번', data.toString());
    fs.readFile('./step23_1.txt', (err, data) => {
      if (err) {
        throw err;
      }
      console.log('3번', data.toString());
    });
  });
});
console.log('끝');

// 동기방식으로 변경2 readFileSync 사용
let data = fs.readFileSync('./step23_1.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./step23_1.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./step23_1.txt');
console.log('3번', data.toString());
