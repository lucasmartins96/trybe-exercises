const fs = require('fs').promises;

const SIMPSONS_JSON_PATH = './simpsons/simpsons.json';

async function getSimpsonsData() {
  try {
    const simpsons = await fs.readFile(SIMPSONS_JSON_PATH, 'utf-8');
    return JSON.parse(simpsons);
  } catch (error) {
    console.error(`Não foi possível ler o arquivo ${SIMPSONS_JSON_PATH} \n Erro: ${error.message}`);
    return rejects(error);
  }
}

async function updateSimpsonsData(simpsonsData) {
  try {
    await fs.writeFile(SIMPSONS_JSON_PATH, simpsonsData);
    console.log('Arquivo modificado com sucesso!');
  } catch (error) {
    console.error(`Não foi possível ler o arquivo ${SIMPSONS_JSON_PATH} \n Erro: ${error.message}`);
    return rejects(error);
  }
}

module.exports = {
  getSimpsonsData,
  updateSimpsonsData,
};
