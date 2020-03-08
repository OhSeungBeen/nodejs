const mongoose = require('mongoose');

const { Schema } = mongoose;
// 필드
// _id, 이름, 나이, 결혼여부, 자기소개, 생성일
const userSchema = new Schema({
  name: {
    type: String,
    //필수 여부
    required: true,
    //유일성 어부
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  married: {
    type: Boolean,
    required: true
  },
  comment: {
    type: String
  },
  createAt: {
    type: Date,
    //기본값
    default: Date.now
  }
});

// mongoose.model(모델명, 스키마, 컬렉션명)
module.exports = mongoose.model('User', userSchema);
