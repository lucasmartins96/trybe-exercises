const CepModel = require('../models/CepModel');
const ViaCepModel = require('../models/ViaCepModel');
const Joi = require('joi');

const findCep = async (cep) => {
  const cepRegex = /\d{5}-\d{3}/;

  if (!cepRegex.test(cep)) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  }

  const cepFound = (await CepModel.findCep(cep)) || (await ViaCepModel.getCep(cep));

  if (!cepFound || cepFound.erro) {
    return { error: { code: 'notFound', message: 'CEP não encontrado' } };
  }

  return cepFound;
};

const validateFields = (cepData) => {
  const { error } = Joi.object({
    cep: Joi.string()
      .pattern(/\d{5}-\d{3}/)
      .required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate(cepData);

  if (error) {
    const { details } = error;
    const [errorDetail] = details;
    return { error: { code: 'invalidData', message: errorDetail.message } };
  }
  return false;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const fieldsValidation = validateFields({ cep, logradouro, bairro, localidade, uf });
  if (fieldsValidation.error) return fieldsValidation;

  const createdCep = await CepModel.create({ cep, logradouro, bairro, localidade, uf });
  if (createdCep.error) {
    const { message } = createdCep.error;
    return { error: { code: 'alreadyExists', message } };
  }

  return createdCep;
};

module.exports = {
  findCep,
  create,
};
