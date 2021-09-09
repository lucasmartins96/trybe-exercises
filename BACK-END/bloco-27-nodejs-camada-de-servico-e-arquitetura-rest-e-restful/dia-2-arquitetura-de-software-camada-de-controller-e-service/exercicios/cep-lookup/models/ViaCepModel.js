const axios = require('axios').default;

const formatCepResponse = (cepApiResponse) => {
  const { cep, logradouro, bairro, localidade, uf } = cepApiResponse;
  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

const getCep = async (cep) => {
  const API = `https://viacep.com.br/ws/${cep}/json/`;
  try {
    const { data } = await axios.get(API);
    if (data.erro) {
      return data;
    }
    return formatCepResponse(data);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getCep,
};
