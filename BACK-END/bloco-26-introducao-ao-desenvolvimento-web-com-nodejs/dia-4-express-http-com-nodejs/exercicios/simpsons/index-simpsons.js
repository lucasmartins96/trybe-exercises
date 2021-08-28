const express = require('express');
const bodyParser = require('body-parser');
const { getSimpsonsData, updateSimpsonsData } = require('./file-management');

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

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  let simpsons = [];
  try {
    const simpsonsData = await getSimpsonsData();
    simpsons.push(...simpsonsData);
  } catch (error) {
    return res.status(500).end();
  }

  const existsId = simpsons.some((simpson) => parseInt(simpson.id) === id);

  if (existsId) {
    return res.status(409).json({ message: 'id already exists' });
  }

  const newSimpsons = JSON.stringify([...simpsons, { id, name }]);

  try {
    await updateSimpsonsData(newSimpsons);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar o simpson!'});
  }

});

app.listen(3002, () => {
  console.log('App listening on port 3002!');
});