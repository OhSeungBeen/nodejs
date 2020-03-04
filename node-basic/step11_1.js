//Node내장객체 - 전역객체 global

global.message = '안녕하세요.';
const { globalmessage } = require('./step11_2');
console.log(globalmessage);
