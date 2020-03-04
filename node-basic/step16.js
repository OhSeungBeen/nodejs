// 내장모듈 - path
// 모든메서드와 property가 많이 사용되므로 암기하는게 좋다.

const path = require('path');
console.log(path.sep); // 경로구별자 ex) 윈도우에서 \
console.log(path.delimiter); // 환경변수의 구분자 ex) 윈도우에서 ;
console.log(path.dirname(__filename)); // __filename 의 dir경로
console.log(path.extname(__filename)); // __filename 의확장자
console.log(path.basename(__filename)); // __filename의 파일이름+확장자
console.log(path.parse(__filename)); // __filename의 root, dir, base, ext, name
console.log(path.normalize('c://users\\\\suengbeen\\path.js')); // path 경로의 오타를 수정해준다.
console.log(path.isAbsolute('c:\\')); //절대경로 true, 상대경로 false를 리턴해준다.
console.log(path.relative('c:\\users\\seungbeen\\path.js', 'c:\\')); // ..\..\.. 상대경로를 알아낼수있다.
console.log(path.join(__dirname, '..', '..', '/users', '/seungbeen')); // 경로를 합처준다. C:\Users\SB\git\users\seungbeen
console.log(path.resolve(__dirname, '..', '..', '/users', '/seungbeen')); // 경로를 합처준다. /exemple를 절대경로로 사용한다. C:\seungbeen
