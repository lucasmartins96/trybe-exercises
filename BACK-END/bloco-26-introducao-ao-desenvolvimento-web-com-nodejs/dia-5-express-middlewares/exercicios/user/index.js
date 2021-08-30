const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3001;
const app = express();
app.use(bodyParser.json());

function validateUserData(req, res, next) {
  const { username, email, password } = req.body;
  
  const isValidUsernameLength = username.length > 3;
  const isValidEmail = /\w+@\w+.com/g.test(email);
  const isValidPasswordLength = 
    (password.toString().length >= 4 && password.toString().length <= 8) && typeof password === 'number';

  if (!isValidUsernameLength || !isValidEmail || !isValidPasswordLength) {
    console.log(isValidUsernameLength, isValidEmail, isValidPasswordLength);
    return res.status(400).json({ "message": "email or password is incorrect" });
  }
  
  next();
}

app.post('/user/register', validateUserData, (req, res) => {
  const { username, email, password } = req.body;
  return res.status(201).json({ "message": "user created" });
});


app.listen(PORT, () => { console.log(`App listening on port ${PORT}!`)});
