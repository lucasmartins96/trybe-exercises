const express = require('express');
const bodyParser = require('body-parser');
const { getSimpsonsData } = require('./file-management');

const app = express();
app.use(bodyParser.json());

app.get('/simpsons', async (req, res) => {
  try {
    const simpsonsData = await getSimpsonsData();
    res.status(200).json(simpsonsData);    
  } catch (error) {
    res.status(500).end();
  }
});

app.listen(3002, () => {
  console.log('App listening on port 3002!');
});