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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateToken(length) {
  let token = '';
  while (length > 0) {
    const asciiCode = getRandomIntInclusive(48, 122);
    // [0-9] --> ASCII [48-57]
    // [A-Z] --> ASCII [65-90]
    // [a-z] --> ASCII [97-122]
    // [~] -> 58-64 || 91-96
    if ((asciiCode < 58 || asciiCode > 64) && (asciiCode < 91 || asciiCode > 96)) {
      const numberOrLetterString = String.fromCharCode(asciiCode);
      token += numberOrLetterString;
      length -= 1;
    }
  }
  return token;
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

app.post('/user/login', validateEmail, validatePassword, (req, res) => {
  const token = generateToken(12);
  return res.status(201).json({ token });
});

app.listen(PORT, () => { console.log(`App listening on port ${PORT}!`)});