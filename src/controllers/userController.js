const express = require('express');
const router = express.Router();
const { createUser } = require('../repositories/userRepository');
const { signToken } = require('../services/authService');

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await createUser({ username, email, password });
    res.status(201).json({ token: signToken(newUser) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add more endpoints for login, update profile, etc.

module.exports = router;