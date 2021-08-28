function displayPositiveNegativeNeutralInFull(number) {
  if (typeof number !== 'number') {
    return 'o valor deve ser um número';
  }
  
  return ((number < 0) ? 'negativo'
    : (number > 0) ? 'positivo' : 'neutro');
}

module.exports = {
  displayPositiveNegativeNeutralInFull
};
