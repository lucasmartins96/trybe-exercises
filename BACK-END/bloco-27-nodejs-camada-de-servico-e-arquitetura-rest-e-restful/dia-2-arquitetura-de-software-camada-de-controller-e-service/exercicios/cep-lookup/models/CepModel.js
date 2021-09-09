const connection = require('./connection');

const findCep = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
  const [cepData] = await connection.execute(query, [cep]);

  if (cepData.length === 0) return null;

  return cepData[0];
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  try {
    const query = 'INSERT INTO cep_lookup.ceps VALUES (?, ?, ?, ?, ?)';
    await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
    return { cep, logradouro, bairro, localidade, uf };
  } catch (error) {
    if (error.errno === 1062) return { error: { message: 'CEP já existente' } };
    console.error(error);
  }
};

module.exports = {
  findCep,
  create,
};
