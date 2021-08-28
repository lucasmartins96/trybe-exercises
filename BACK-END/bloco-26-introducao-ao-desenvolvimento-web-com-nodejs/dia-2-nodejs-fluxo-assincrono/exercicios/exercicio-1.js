function calcularTresNumeros(a, b, c) {
  return new Promise ((resolve, reject) => {
    const isNumericArray = [...arguments].every((num) => typeof num === 'number');
    
    if (!isNumericArray) {
      return reject(Error('Informe apenas números'));
    }

    const result = (a + b) * c;
    
    return (result < 50) ? reject(Error('Valor muito baixo')) : resolve(result);
  });
}

module.exports = {
  calcularTresNumeros
};
