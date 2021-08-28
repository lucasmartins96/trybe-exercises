const fs = require('fs').promises;

const nomeDoArquivo = 'simpsons.json';

async function getDataFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const simpsons = JSON.parse(data);
    return simpsons;
  } catch (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo} \n Erro: ${err}`);
    process.exit(1);
  }
}

async function updateFile(filePath, newContent, flag = 'w') {
  try {
    await fs.writeFile(filePath, newContent, { flag });
    console.log('Arquivo modificado com sucesso!');
  } catch (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo} \n Erro: ${err}`);
    process.exit(1);
  }
}

async function listAllSimpsons() {
  const simpsons = await getDataFile(nomeDoArquivo);
  
  simpsons.forEach(({ id, name }) => {
    console.log(`${id} - ${name}`);
  });
}

async function findSimpsonById(id) {
  const simpsons = await getDataFile(nomeDoArquivo);
  const characterFound = simpsons.filter(
    (characterData) => characterData.id == id);
  
  if (!characterFound) {
    throw new Error('id não encontrado');
  }

  return characterFound;
}

async function removeSimpson(id) {
  const simpsons = await getDataFile(nomeDoArquivo);
  const updatedSimpsonsData = simpsons.filter(
    (characterData) => characterData.id != id);

  const newSimpsonsJSON = JSON.stringify(updatedSimpsonsData);
  updateFile(nomeDoArquivo, newSimpsonsJSON);
}

async function generateSimpsonFamily() {
  const simpsons = await getDataFile(nomeDoArquivo);
  const simpsonFamily = simpsons.filter((simpson) => Number(simpson.id) < 5)
  
  const newSimpsonsJSON = JSON.stringify(simpsonFamily);
  updateFile('./simpsonFamily.json', newSimpsonsJSON);
}

async function addInSimpsonFamily(newSimpson) {
  const simpsonFamily = await getDataFile('./simpsonFamily.json');
  const lastElement = simpsonFamily.length - 1;
  const { id } = simpsonFamily[lastElement];
  const newId = (Number(id) + 1).toString();
  const newSimpsonsFamily = [...simpsonFamily, { id: newId, name: newSimpson }];

  const newSimpsonsFamilyJSON = JSON.stringify(newSimpsonsFamily);
  updateFile('./simpsonFamily.json', newSimpsonsFamilyJSON);
}

async function updateSimpsonFamily(simpsonToReplace, newSimpson) {
  const simpsonFamily = await getDataFile('./simpsonFamily.json');
  const simpsonsFamilyCopy = [...simpsonFamily];
  const simpsonFoundIndex = simpsonFamily
    .findIndex((simpson) => simpson.name === simpsonToReplace);

  if (simpsonFoundIndex === -1) {
    console.log('Simpson não encontrado!');
    return;
  }
  const { id } = simpsonFamily[simpsonFoundIndex];
  simpsonsFamilyCopy.splice(simpsonFoundIndex, 1, { id, name: newSimpson });
  
  const newSimpsonsFamilyJSON = JSON.stringify(simpsonsFamilyCopy);
  updateFile('./simpsonFamily.json', newSimpsonsFamilyJSON);
}

// execuções das funções

listAllSimpsons();
(async function execFind () {
  const simpsonFound1 = await findSimpsonById(6);
  const simpsonFound2 = await findSimpsonById(11);
  console.log(simpsonFound1);
  console.log(simpsonFound2);
})();

removeSimpson(10);
removeSimpson(6);
generateSimpsonFamily();
addInSimpsonFamily('Nelson Muntz');
updateSimpsonFamily('Nelson Muntz', 'Maggie Simpson');
