const Test = require('../models/Test');
const Question = require('../models/question');

exports.createTest = async (req, res) => {
  try {
    const { title, category, questions, duration } = req.body;
    const test = new Test({ title, category, questions, duration });
    await test.save();
    res.status(201).json({ message: 'Test created successfully', test });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createQuestion = async (req, res) => {
  try {
    const { text, options, correctAnswer } = req.body;
    const question = new Question({ text, options, correctAnswer });
    await question.save();
    res.status(201).json({ message: 'Question created successfully', question });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
