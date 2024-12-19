const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser); // User registration
router.post('/login', loginUser);       // User login
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Protected Route Accessed' });
});

module.exports = router;
