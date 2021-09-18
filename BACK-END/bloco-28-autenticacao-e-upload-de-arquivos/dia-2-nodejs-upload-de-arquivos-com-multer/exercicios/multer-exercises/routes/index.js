const express = require('express');
const multer = require('multer');
const controller = require('../controllers');
const service = require('../services/upload');

const routes = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    //Colocar uma mensagem de erro na requisição
    req.fileValidationError = true;

    //Rejeitar o arquivo
    return cb(null, false);
  }

  if (service.fileExists(file.originalname)) {
    //Colocar uma flag de erro na requisição
    req.fileDuplicated = true;

    //Rejeitar o arquivo
    return cb(null, false);
  }

  //Aceitar o arquivo
  cb(null, true);
};

const defaultStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
});

const uploadMiddleware = multer({ storage, fileFilter }).single('file');
const multipleUploadsMiddleware = multer({ storage: defaultStorage }).array('files');
const profilePicsMiddleware = multer({ dest: 'profilePics' }).single('profilePic');

routes.post('/upload', uploadMiddleware, controller.upload);
routes.post('/multiple', multipleUploadsMiddleware, controller.multiple);
routes.post('/profile', profilePicsMiddleware, controller.profile);
routes.get('/profiles/:id', controller.getProfile);

module.exports = routes;
