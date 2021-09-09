const CepService = require('../services/CepService');

const OK_STATUS_CODE = 200;
const CREATED_STATUS_CODE = 201;

const findCep = async (req, res, next) => {
  const { cep } = req.params;
  const cepFound = await CepService.findCep(cep);

  if (cepFound.error) return next(cepFound.error);

  await CepService.create(cepFound);

  return res.status(OK_STATUS_CODE).json(cepFound);
};

const create = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const createdCep = await CepService.create({ cep, logradouro, bairro, localidade, uf });

  if (createdCep.error) return next(createdCep.error);

  res.status(CREATED_STATUS_CODE).json(createdCep);
};

module.exports = {
  findCep,
  create,
};
