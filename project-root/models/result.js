const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    test: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true },
    score: { type: Number, required: true },
    answers: [
      {
        question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
        selectedOption: { type: String },
      },
    ],
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('Result', ResultSchema);
  