const userModel = require('../models/user');

module.exports = async (req, res) => {
  const { username, admin } = req;
  // const userFound = userModel.findUserById(userId);
  return res.status(200).json({ username, admin });
}