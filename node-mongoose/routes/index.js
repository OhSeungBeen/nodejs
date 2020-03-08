// mongoose 쿼리
// find 모두찾기
// findOne 하나만 찾기
// new 스키마(data).save 생성
// remove 제거하기
var express = require('express');
var router = express.Router();
// schema 가져오기
const User = require('../schemas/user');

router.get('/', function(req, res, next) {
  User.find()
    .then(users => {
      res.render('mongoose', { title: 'Express', users });
    })
    .catch(error => {
      console.error(error);
      next(erorr);
    });
});

module.exports = router;
