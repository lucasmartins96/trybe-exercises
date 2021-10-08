const express = require('express');

const bookController = require('./book/bookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(bookController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

// module.exports = app;
