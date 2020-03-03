// 콜백과 프로미스 비교

// ES5
// 콜백 => 콜백 => 콜백 ........... 끝이없다.... ----> callback hell
Users.findOne('zero', (err, user) => {
  if (err) {
    return console.err(error);
  }
  console.log(user);
  Users.update('zero', (err, user) => {
    console.log(updatedUser);
    Users.remove('nero', (err, removedUser) => {
      console.log(removedUser);
    });
  });
});
console.log('다 찾았니?');

// ES6
// 프로미스 적용
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
