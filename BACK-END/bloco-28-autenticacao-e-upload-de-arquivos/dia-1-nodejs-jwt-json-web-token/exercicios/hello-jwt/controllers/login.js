const jwt = require('jsonwebtoken');

const { ADMIN, SECRET } = process.env;

module.exports = (req, res, next) => {
  try {
    const { username, password } = req.body;
    let admin = false;

    if (username === ADMIN && password === ADMIN) {
      admin = true;
    }

    const payload = { username, admin };

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const token = jwt.sign(payload, SECRET, jwtConfig);
    res.status(200).json({ token });
  } catch (error) {
    next({ message: error.message });
  }
};
