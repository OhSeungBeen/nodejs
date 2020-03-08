const mongoose = require('mongoose');

const { Schema } = mongoose;
// Schema 객체에 Types객체에 ObjectId가 있다.
const { Types: ObjectId } = Schema;
// 필드
// _id, 작성자, 댓글내용, 생성일
const commentSchema = new Schema({
  commenter: {
    type: ObjectId,
    required: true,
    // User스키마의 아이디 참조
    ref: 'User'
  },
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// mongoose.model(모델명, 스키마, 컬렉션명)
module.exports = mongoose.model('Comment', commentSchema);
