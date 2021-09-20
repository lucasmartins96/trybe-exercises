const userModel = require('../models/user');

module.exports = async (req, res) => {
  const { userId } = req.params;
  const userFound = userModel.findUserById(userId);
  return res.status(200).json(userFound);
}