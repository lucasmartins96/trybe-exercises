module.exports = (req, res, next) => {
  const { username, admin } = req;

  res.status(200).json({ username, admin });
};
