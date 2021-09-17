require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/envios'));

const showCurrentDate = () => {
  const date = new Date();
  const [day, month, year] = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
  return `${day}-${month}-${year}`;
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const storageEnvios = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'envios');
  },
  filename: (req, file, callback) => {
    callback(null, `${file.filename}${showCurrentDate()}`);
  },
});

const upload = multer({ storage });
const envios = multer({ storage: storageEnvios });

app.post('/files/upload', upload.single('file'), (req, res) =>
  res.status(200).json({ body: req.body, file: req.file })
);

app.post('/envios', envios.single('file'), (req, res) =>
  res.status(200).json({ body: req.body, file: req.file })
);

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
