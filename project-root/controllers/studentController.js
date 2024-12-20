const Test = require('../models/Test');
const Result = require('../models/result');

exports.getTests = async (req, res) => {
  try {
    const tests = await Test.find().select('-questions');
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.submitTest = async (req, res) => {
  // Scoring logic as previously shared
};
