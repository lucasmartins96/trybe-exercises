const express = require('express');
const User = require('./models/User');
const {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  validateId,
} = require('./middlewares/validations');

const OK_STATUS = 200;
const CREATED_STATUS = 201;
const NOT_FOUND_STATUS = 404;
const app = express();
app.use(express.json());

app.post(
  '/user',
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const userInserted = await User.create(firstName, lastName, email, password);
    return res.status(CREATED_STATUS).json(userInserted);
  }
);

app.get('/user/:id', validateId, async (req, res) => {
  const { id } = req.params;

  const userFound = await User.findById(id);
  if (!userFound) {
    return res.status(NOT_FOUND_STATUS).json({
      error: true,
      message: 'Usuário não encontrado',
    });
  }
  return res.status(OK_STATUS).json(userFound);
});

app.get('/user', async (req, res) => {
  const users = await User.getAll();
  return res.status(OK_STATUS).json(users);
});

app.put(
  '/user/:id',
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  validateId,
  async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const newData = { firstName, lastName, email, password };
    const userUpdated = await User.update(id, newData);

    return res.status(OK_STATUS).json(userUpdated);
  }
);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
