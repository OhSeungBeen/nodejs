// 템플릿 문자열(백틱, `)

const a = 'hello';
const b = true;
const c = 3;
// 기존 문자열 concat
const d = a + ' ' + b + ' ' + c;
// 백틱 ` 사용
const f = `${a} ${b} ${c}`;
console.log(d);
console.log(f);

// 비교
const g = "안녕하세요. 작은따음표('')입니다.";
const h = `안녕하세요. 작음따음표(')입니다.`;
// 편리함
const i = `"''''"""'''"""'""""""''"""""`;
