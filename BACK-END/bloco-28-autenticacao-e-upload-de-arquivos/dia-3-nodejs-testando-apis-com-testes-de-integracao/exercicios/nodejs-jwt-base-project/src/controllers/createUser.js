const Model = require('../models/user');
const createToken = require('../services/createToken');

module.exports = async (req, res, next) => {
  try {
    const createdUser = await Model.registerUser(
      req.body.username,
      req.body.password
    );
    const { _id, username } = createdUser;
    const token = createToken({ _id, username });

    if (!createdUser) throw Error;
    res.status(201).json({ message: 'Novo usuário criado com sucesso', user: createdUser, token });
  } catch (err) {
    next({ message: 'Erro ao salvar o usuário no banco' });
  }
};
