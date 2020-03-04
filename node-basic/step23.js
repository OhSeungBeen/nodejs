// 내장모듈 - fs (비동기 방식)

//cf) node 10 이상부터 promies fs에 적용가능
//    const fs =require('fs').promises;

//파일 읽기 - 비동기방식
const fs = require('fs');
fs.readFile('./step23_1.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data); // 바이너리 데이터로반환
  console.log(data.toString());
});

//파일 만들고 읽기
fs.writeFile('./step23_2.txt', '글을 써주세요', err => {
  if (err) {
    throw err;
  }
  fs.readFile('./step23_2.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data.toString());
  });
});
