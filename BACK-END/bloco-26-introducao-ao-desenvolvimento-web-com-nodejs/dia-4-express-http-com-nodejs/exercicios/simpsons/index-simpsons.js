const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(3002, () => {
  console.log('App listening on port 3002!');
});