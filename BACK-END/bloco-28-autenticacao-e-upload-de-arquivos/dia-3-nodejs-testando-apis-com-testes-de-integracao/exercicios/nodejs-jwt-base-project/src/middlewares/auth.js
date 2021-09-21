// validateJWT.js
const jwt = require('jwt-simple');
const userModel = require('../models/user');

const { SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  const { userId } = req.params;
  if (!token) {
    return next({ statusCode: 400, message: 'Token não encontrado ou informado' });
  }

  try {
    const decoded = jwt.decode(token, SECRET);
    const { username, admin, _id } = decoded;

    if (_id !== userId) throw Error('Acesso negado');

    req.username = username;
    req.admin = admin;

    next();
  } catch (err) {
    next({ statusCode: 401, message: err.message });
  }
};
