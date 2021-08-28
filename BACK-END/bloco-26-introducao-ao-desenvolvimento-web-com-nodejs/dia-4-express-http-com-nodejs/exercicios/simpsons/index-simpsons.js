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

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  let simpsons = [];
  try {
    const simpsonsData = await getSimpsonsData();
    simpsons.push(...simpsonsData);
  } catch (error) {
    return res.status(500).end();
  }

  const foundSimpson = simpsons.find((simpson) => parseInt(simpson.id) === parseInt(id));
  
  if (!foundSimpson) {
    return res.status(404).json({ message: 'simpson not found' });
  }

  res.status(200).json(foundSimpson);
});

app.listen(3002, () => {
  console.log('App listening on port 3002!');
});