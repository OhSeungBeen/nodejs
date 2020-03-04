// 내장모듈 - crypo 단방향 암호화(해시)
const crypto = require('crypto');

// 비밀번호123456을 sha512방식으로 암호화해서 base64로 출력
console.log(
  crypto
    .createHash('sha512')
    .update('123456')
    .digest('base64')
);

// 단방향암호화 - 복호화 할 수 없다. 암호문을 저장한 후 사용자의 입력 비밀번호를 암호화한 것과 비교
// 1234 -> dsfoqejfonqenfoqefoqefieqojfooeq
// 4884 -> dsfoqejfonqenfoqefoqefieqojfooeq
// 똑같은 암호화문이 나올 수 있다.
// 해커들이 알아낼 수 있다.

// 해결법
// pbkdf2 암호화방식
crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  crypto.pbkdf2('123456', salt, 10000, 64, 'sha512', (err, key) => {
    console.log('password', key.toString('base64'));
  });
});
