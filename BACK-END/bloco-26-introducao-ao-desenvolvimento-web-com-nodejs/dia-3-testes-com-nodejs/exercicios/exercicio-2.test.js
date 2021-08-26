const { expect } = require('chai');
const { displayPositiveNegativeNeutralInFull } = require('./exercicio-2');

describe('Testando a função displayPositiveNegativeNeutralInFull', () => {
  describe('Ao executar a função o tipo do retorno é:', () => {
    it('Uma string', () => {
      const response = displayPositiveNegativeNeutralInFull(2);
      expect(response).to.be.a('string');
    });
  });

  describe('Ao executar a função com valor', () => {
    it('maior que 0, o conteúdo do retorno é "positivo":', () => {
      const response = displayPositiveNegativeNeutralInFull(2);
      expect(response).to.be.equal('positivo');
    });

    it('menor que 0, o conteúdo do retorno é "negativo":', () => {
      const response = displayPositiveNegativeNeutralInFull(-2);
      expect(response).to.be.equal('negativo');
    });

    it('igual a 0, o conteúdo do retorno é "neutro":', () => {
      const response = displayPositiveNegativeNeutralInFull(0);
      expect(response).to.be.equal('neutro');
    });

    it('diferente de número, o conteúdo do retorno é "o valor deve ser um número":', () => {
      const response = displayPositiveNegativeNeutralInFull('a');
      expect(response).to.be.equal('o valor deve ser um número');
    });
  });
});