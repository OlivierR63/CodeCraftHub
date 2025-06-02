const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(`username = ${username} et email = ${email} et password = ${password}`);
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    // Add logic to compare passwords
    res.status(200).send({ message: 'User logged in successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
