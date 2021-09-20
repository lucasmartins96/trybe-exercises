// validateJWT.js
const jwt = require('jwt-simple');

const { SECRET } = process.env;

module.exports = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return next({ statusCode: 400, message: 'Token não encontrado ou informado' });
  }

  try {
    const decoded = jwt.decode(token, SECRET);
    const { username, admin } = decoded;

    req.username = username;
    req.admin = admin;

    next();
  } catch (err) {
    next({ statusCode: 401, message: err.message });
  }
};
