const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema({
  enjoy: {
    type: String,
  },
  choice: {
    type: String,
  },
  thrilled: {
    type: String,
  },
  distraction: {
    type: String,
  },
  highStandard: {
    type: String,
  },
  question6: {
    type: String,
  },
  question7: {
    type: String,
  },
  question8: {
    type: String,
  },
  question9: {
    type: String,
  },
  question10: {
    type: String,
  },
  question11: {
    type: String,
  },
  question12: {
    type: String,
  },
  question13: {
    type: String,
  },
  question14: {
    type: String,
  },
  question15: {
    type: String,
  },
  question16: {
    type: String,
  },
  question17: {
    type: String,
  },
  question18: {
    type: String,
  },
  question19: {
    type: String,
  },
  question20: {
    type: String,
  },
  question21: {
    type: String,
  },
  question22: {
    type: String,
  },
  question23: {
    type: String,
  },
  question24: {
    type: String,
  },
  question25: {
    type: String,
  },
  question26: {
    type: String,
  },
  question27: {
    type: String,
  },
  personalityType: String,
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
