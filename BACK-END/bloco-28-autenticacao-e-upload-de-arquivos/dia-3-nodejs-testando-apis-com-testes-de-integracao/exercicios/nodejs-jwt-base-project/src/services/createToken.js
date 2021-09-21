const jwt = require('jwt-simple');

const { ADMIN, SECRET } = process.env;

module.exports = ({ _id, username }) => {
  let admin = false;

  if (username === ADMIN && password === ADMIN) {
    admin = true;
  }

  const payload = { _id, username, admin };

  const token = jwt.encode(payload, SECRET, 'HS256');
  return token;
};
