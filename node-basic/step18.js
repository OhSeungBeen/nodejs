// 내장모듈 - url
// whatwg 방식 serach처리부분이 편리하다.
// searchParams, searchParams
const { URL } = require('url');

const myURL = new URL(
  'http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript'
);
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category')); //category의 value값들 배열 리턴
console.log('searchParams.get():', myURL.searchParams.get('limit')); // limit의 value값 리턴
console.log('searchParams.has():', myURL.searchParams.has('page')); // page key값 가지고있으면 true , 없으면 false리턴

console.log('searchParams.keys():', myURL.searchParams.keys()); // 모든 key 리턴
console.log('searchParams.values():', myURL.searchParams.values()); // 모든 value값 리턴

myURL.searchParams.append('filter', 'es3'); // parm 추가
myURL.searchParams.append('filter', 'es5'); // parm 추가
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6'); // 다지우고 parm추가
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter'); // parm 삭제
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString()); // 모든 param 문자열 리턴
myURL.search = myURL.searchParams.toString();
