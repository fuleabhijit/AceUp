const express = require('express');
const router = express.Router();
const { createTest, createQuestion } = require('../controllers/adminController');

// Admin routes
router.post('/tests', createTest);
router.post('/questions', createQuestion);

module.exports = router;
