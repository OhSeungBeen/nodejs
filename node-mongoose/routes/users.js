// mongoose 쿼리
// find 모두찾기
// findOne 하나만 찾기
// new 스키마(data).save 생성
// remove 제거하기
var express = require('express');
var router = express.Router();
const User = require('../schemas/user');
// get users
router.get('/', function(req, res, next) {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      console.error(error);
      next(error);
    });
});

// post users
router.post('/', function(req, res, next) {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married
  });
  user
    .save()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      console.error(error);
      next(error);
    });
});

module.exports = router;
