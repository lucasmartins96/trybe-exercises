const { calcularTresNumeros } = require('./exercicio-1');

const a = Math.floor(Math.random() * 10 + 1);
const b = Math.floor(Math.random() * 10 + 1);
const c = Math.floor(Math.random() * 10 + 1);

calcularTresNumeros(a, b, c)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));