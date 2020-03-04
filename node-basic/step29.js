// 내장모듈 - event
// 미리 이벤트리스너를 만들어, 이벤트리스너는 특정 이벤트가 발생했을 때 어떤 동작을 할지 정의하는 부분
// ex) 사람들이 서버에 방문(이벤트)하면 HTML 파일을 줄거야.

const EventEmitter = require('events');
const myEvent = new EventEmitter();

// 이벤트리스너 추가
myEvent.addListener('방문', () => {
  console.log('방문해주셔서 감사합니다.');
});

// on과 addListener는 같음
// 나눠서 이벤트를 추가할 수 있다.
myEvent.on('종료', () => {
  console.log('안녕히 가세요.');
});
myEvent.on('종료', () => {
  console.log('안녕히 가세요2.');
});

// 한번만 실행
myEvent.once('한번이벤트', () => {
  console.log('한 번만 실행됩니다.');
});

// 이벤트 호출
myEvent.emit('방문');
myEvent.emit('종료');
myEvent.emit('한번이벤트');
myEvent.emit('한번이벤트');

myEvent.on('제거', () => {
  console.log('제거할 리스너');
});

// 리스너 제거
// removeAllListenrs 모든 '제거' 리스너 제거
// removeLister('제거', callback); 리스너 제거
myEvent.removeAllListeners('제거');
myEvent.emit('제거');
