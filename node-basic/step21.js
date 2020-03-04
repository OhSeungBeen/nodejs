// 내장모듈 - crypo 양방향 암호화

const crypto = require('crypto');

// 암호화
const cipher = crypto.createCipher('aes-256-cbc', '열쇠');
let result = cipher.update('123456승빈', 'utf8', 'base64');
result += cipher.final('base64');
console.log(result);

// 복호화
// 똑같은 암호화, 열쇠를 써야된다.
const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
// base64로된 result를 utf8로 바꿔라
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log(result2);
