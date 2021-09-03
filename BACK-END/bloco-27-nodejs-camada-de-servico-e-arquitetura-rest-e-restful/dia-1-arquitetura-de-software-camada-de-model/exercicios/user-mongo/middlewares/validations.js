const { ObjectId } = require('mongodb');

const BAD_REQUEST_STATUS = 400;

function validateFirstName(req, res, next) {
  const { firstName } = req.body;
  if (!firstName)
    return res.status(BAD_REQUEST_STATUS).json({
      error: true,
      message: "O campo 'firstName' é obrigatório",
    });

  next();
}

function validateLastName(req, res, next) {
  const { lastName } = req.body;
  if (!lastName)
    return res.status(BAD_REQUEST_STATUS).json({
      error: true,
      message: "O campo 'lastName' é obrigatório",
    });

  next();
}

function validateEmail(req, res, next) {
  const { email } = req.body;
  if (!email)
    return res.status(BAD_REQUEST_STATUS).json({
      error: true,
      message: "O campo 'email' é obrigatório",
    });

  next();
}

function validatePassword(req, res, next) {
  const { password } = req.body;
  if (!password) {
    return res.status(BAD_REQUEST_STATUS).json({
      error: true,
      message: "O campo 'password' é obrigatório",
    });
  }

  if (password.length < 5) {
    return res.status(BAD_REQUEST_STATUS).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres",
    });
  }

  if (typeof password !== 'string') {
    return res.status(BAD_REQUEST_STATUS).json({
      error: true,
      message: "'password'inválido",
    });
  }

  next();
}

function validateId(req, res, next) {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(BAD_REQUEST_STATUS).json({
      error: true,
      message: 'id inválido',
    });
  }
  next();
}

module.exports = {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  validateId,
};
