// 함수의 변화

// ES5
// 함수 표현문
function add(x, y) {
  return x + y;
}
// 함수 표현식
var add2 = function(x, y) {
  return x + y;
};

// ES6
const add3 = (x, y) => {
  // 한줄인경우 return 생략 가능
  x + y;
};

// {}도 생략 가능
const add4 = (x, y) => x + y;

// function 과 => 차이
var realationship1 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends: function() {
    var that = this; // realationship1을 가르키는 this
    this.friends.forEach(function(friend) {
      console.log(that.name, friend);
    });
  }
};
realationship.logFriends();

// that에 this를 저장할 필요가 없어짐
var realationship2 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends() {
    this.friends.forEach(friend => {
      console.log(this.name, friend);
    });
  }
};
realationship2.logFriends();
