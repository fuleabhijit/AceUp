const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    options: [{ type: String }], // Array of strings
    correctAnswer: { type: String, required: true },
    explanation: { type: String }, // Optional
  });
  
  module.exports = mongoose.model('Question', QuestionSchema);
  