// 비구조화 할당(destructuring)

// 객체에서의 비구조화 할당
// ES5
// var candyMchine = {
//   status: {
//     name: 'node',
//     count: 5
//   },
//   getCandy: function() {
//     this.status.count--;
//     return this.status.count;
//   }
// };
// var status = candyMchine.status;
// var getCandy = candyMchine.getCandy;

// ES6
const candyMchine2 = {
  status: {
    name: 'node',
    count: 5
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  }
};
const { status, getCandy } = candyMchine2;
console.log(status);
console.log(getCandy.call(candyMchine2));

// 배열에서의 비구조화 할당
// ES5
// var array = ['nodejs', {}, 10, true];
// var node = array[0];
// var obj = array[1];
// var bool = array[array.length - 1];

// ES6
const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;
const [...x] = array;
console.log(bool);
console.log(x);
