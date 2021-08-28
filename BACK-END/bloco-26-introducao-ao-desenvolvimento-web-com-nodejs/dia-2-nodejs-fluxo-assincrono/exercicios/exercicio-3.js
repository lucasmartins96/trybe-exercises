const { calcularTresNumeros } = require('./exercicio-1');

const asyncFunc = async () => {
  const a = Math.floor(Math.random() * 10 + 1);
  const b = Math.floor(Math.random() * 10 + 1);
  const c = Math.floor(Math.random() * 10 + 1);

  try {
    const result = await calcularTresNumeros(a, b, c);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

asyncFunc();