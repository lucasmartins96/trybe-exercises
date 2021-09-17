const error = require('./error');
const validateEntries = require('./validations');
const authenticateUser = require('./auth');
const authorize = require('./admin');

module.exports = {
  error,
  validateEntries,
  authenticateUser,
  authorize,
};
