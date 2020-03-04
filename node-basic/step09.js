//async, await

// Promise
Users.findOne('zero')
  .then(users => {
    console.log(user);
    return Users.update('zero', 'nero');
  })
  .then(UpdateUser => {
    console.log(user);
    return Users.update('zero', 'nero');
  })
  .then(removedUser => {
    console.log(user);
    return Users.update('zero', 'nero');
  })
  .catch(err => {
    console.error(error);
  });
console.log('다 찾았니?');

// async,await
// console.log('다 찾았니?') 자유자제로 원하는 시점에 실행할 수 있다.
// error를 처리하려면 try catch로 묶어야된다. 개별적으로 묶거나 같이
async () => {
  try {
    const user = await Users.findOne('zero');
    const updateUser = await Users.update('zero', 'nero');
    console.log(updateUser);
    const removeUser = await Users.remove('nero');
    console.log(removeUser);
    console.log('다 찾았니?');
  } catch (err) {
    console.log(err);
  }
};

Func();
