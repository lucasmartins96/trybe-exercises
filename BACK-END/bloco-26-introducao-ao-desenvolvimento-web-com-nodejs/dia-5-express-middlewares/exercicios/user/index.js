const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3001;
const app = express();
app.use(bodyParser.json());

function validateUsernameLength(req, res, next) {
  const { username } = req.body;

  if (username.length <= 3) {    
    return res.status(400).json({ "message": "username is incorrect" });
  }

  next();
}

function validateEmail(req, res, next) {
  const { email } = req.body;

  const emailRegex = new RegExp(/\w+@\w+.com/, 'g');

  if (!emailRegex.test(email)) {    
    return res.status(400).json({ "message": "email is incorrect" });
  }

  next();
}

function validatePassword(req, res, next) {
  const { password } = req.body;

  const isValidPasswordLength = 
    password.toString().length < 4 || password.toString().length > 8 || typeof password !== 'number';

  if (isValidPasswordLength) {
    return res.status(400).json({ "message": "password is incorrect" });
  }

  next();
}

app.post(
  '/user/register',
  validateUsernameLength,
  validateEmail,
  validatePassword, 
  (req, res) => {
  const { username, email, password } = req.body;
  return res.status(201).json({ "message": "user created" });
});

app.post('/user/login', (req, res) => {
  const { email, password } = req.body;
  
});

app.listen(PORT, () => { console.log(`App listening on port ${PORT}!`)});
