const express = require('express');
const CepController = require('./controllers/CepController');
const { handleErrors } = require('./middlewares/error');

const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', CepController.findCep);
app.post('/cep', CepController.create);

app.use(handleErrors);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
