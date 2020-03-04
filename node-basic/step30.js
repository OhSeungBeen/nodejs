// 예왜처리 - try catch

// setInterval(() => {
//   console.log('시작');
//   try {
//     throw new Error('서버 고장내주마');
//   } catch (error) {
//     console.error(error);
//   }
// }, 1000);

// setTimeout이 실행되지못한다
// 해결책 ?
// process.on('uncaughtExeption', (err)=>{})
// 하지만 계속에러가 뜬다 uncaughtExeption에 의존하지 말고 근본적인 에러의 원인을 찾자
process.on('uncaughtException', err => {
  console.log('예기치 못한 에러', err);
  // 서버를 복구하는 코드
});

setInterval(() => {
  throw new Error('서버를 고장내주마!');
}, 1000);
setTimeout(() => {
  console.log('실행됩니다.');
}, 2000);
