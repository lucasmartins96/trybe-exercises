const express = require('express');
const User = require('./models/User');
const {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
} = require('./middlewares/validations');

const CREATED_STATUS = 201;
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

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
