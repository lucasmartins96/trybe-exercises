// validateJWT.js
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return next({ statusCode: 401, message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    const { username, admin } = decoded;

    req.username = username;
    req.admin = admin;

    next();
  } catch (err) {
    next({ statusCode: 401, message: err.message });
  }
};
