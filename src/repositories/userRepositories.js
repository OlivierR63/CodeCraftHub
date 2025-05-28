const User = require('../models/user.model');

exports.createUser = async (user) => {
  try {
    const savedUser = await new User(user).save();
    return savedUser;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getUserByUsername = async (username) => {
  try {
    return await User.findOne({ username });
  } catch (error) {
    throw new Error(error);
  }
};