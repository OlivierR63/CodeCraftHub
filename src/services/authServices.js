const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'your_jwt_secret';

exports.signToken = (user) => {
  return jwt.sign(
    { userId: user._id },
    secret,
    { expiresIn: '1h' }
  );
};

exports.verifyToken = (token) => {
  return jwt.verify(token, secret);
};