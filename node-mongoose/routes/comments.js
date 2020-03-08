const express = require('express');
const router = express.Router();
const Comment = require('../schemas/comment');

// get comments
router.get('/:id', (req, res, next) => {
  // find(조건)
  Comment.find({ commenter: req.params.id })
    //popualte
    // CommentSchema를 조사해서 ref를 보고 mongoose가 해당 객체를 가져온다.
    // join이랑 유사하다.
    // mongoDB가하는게아니라 mongoose가 하기때문에 성능이 떨어진다.
    .populate('commenter')
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      console.error(error);
      next(error);
    });
});

//patch comments
router.patch('/:id', (req, res, next) => {
  //{조건} {바꿀내용}
  Comment.update({ _id: req.params.id }, { comment: req.body.comment })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      console.error(error);
      next(error);
    });
});

//delete comments
router.delete('/:id', (req, res, next) => {
  //{조건} {바꿀내용}
  Comment.remove({ _id: req.params.id })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      console.error(error);
      next(error);
    });
});

// post comments
router.post('/', (req, res, next) => {
  const post = new Comment({
    commenter: req.body.id,
    comment: req.body.comment
  });
  post
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
