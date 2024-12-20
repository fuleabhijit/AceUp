const express = require('express');
const router = express.Router();
const { getTests, submitTest } = require('../controllers/studentController');

// Student routes
router.get('/tests', getTests);
router.post('/tests/:id/submit', submitTest);

module.exports = router;
