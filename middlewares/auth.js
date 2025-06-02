// Example middleware for authentication
const auth = (req, res, next) => {
  // In a real application, you would verify the user's token here
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).send({ error: 'No token, authorization denied' });
  }
  try {
    // Verify token
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send({ error: 'Token is not valid' });
  }
};

module.exports = auth;
