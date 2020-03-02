// 객체 리터럴의 변화

// ES5
var sayNode = function() {
  console.log('Node');
};
var es = 'ES';
var oldObject = {
  sayJS: function() {
    console.log('JS');
  },
  sayNode: sayNode
};
oldObject[es + 6] = 'Fantastic';

oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

// ES6
const newObject = {
  sayJS() {
    console.log('JS');
  },
  sayNode,
  //동적리터럴 객체내부에 선언 가능
  [es + 6]: 'Fantastic'
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);
