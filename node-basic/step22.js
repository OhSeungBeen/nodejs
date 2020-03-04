// 내장모듈 - util(deprecated, promisfiy)

const util = require('util');
const crypto = require('crypto');

// deprecated 지원이 조만간 중단될 메서드임을 알려줄 때 사용
const dontuseme = util.deprecate((x, y) => {
  console.log(x + y);
}, '이 함수는 2018년 12월 부로 지원하지 않습니다.');

dontuseme(1, 2); // 결과는 나오지만 DeprecationWarning 메세지가 나타난다.

// promisify
// promise를 지원하지않는 함수를 바꿔준다
const randomBytesPromise = util.promisify(crypto.randomBytes);
const pbkdf2Promise = util.promisify(crypto.pbkdf2);

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  crypto.pbkdf2('123456', salt, 10000, 64, 'sha512', (err, key) => {
    console.log('password', key.toString('base64'));
  });
});

// 2번의 콜백이일어나고있다 => promise로 변경
randomBytesPromise(64)
  .then(buf => {
    const salt = buf.toString('base64');
    return pbkdf2Promise('123456', salt, 10000, 64, 'sha512');
  })
  .then(key => {
    console.log('password', key.toString('base64'));
  })
  .catch(err => {
    console.error(err);
  });

// async await으로 변경이 가능하다.
(async () => {
  const buf = await randomBytesPromise(64);
  const salt = buf.toString('base64');
  const key = await pbkdf2Promise('123456', salt, 10000, 64, 'sha512');
  console.log('password', key.toString('base64'));
})();
