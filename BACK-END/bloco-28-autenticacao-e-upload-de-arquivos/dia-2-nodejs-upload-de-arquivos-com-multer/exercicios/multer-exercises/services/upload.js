//Usaremos o 'fs' pois teremos que fazer a leitura de todos os arquivos do diretório.
const fs = require('fs');
const path = require('path');

const fileExists = (fileName) => {
  const UPLOADS_PATH = `${__dirname}/../uploads`;
  //fs.readdirSync retorna uma lista com nome de todos os arquivos da pasta uploads.
  const files = fs.readdirSync(UPLOADS_PATH);
  //Aqui usamos a função some, que retorna `true` se algum dos items do array passar no teste, no nosso caso o `file.includes`.
  return files.some((file) => file === fileName);
};

module.exports = { fileExists };
