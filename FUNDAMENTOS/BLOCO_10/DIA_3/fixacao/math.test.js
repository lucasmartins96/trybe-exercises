// const { somar, subtrair, multiplicar, dividir} = require('./math');
const math = require('./math');

/*
Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.

*/
describe('Testando os arquivos math', () => {
  describe('Testando se a função subtrair', () => {
    it('É chamada', () => {
      math.subtrair = jest.fn();
      math.subtrair();
      expect(math.subtrair).toHaveBeenCalled();
    });

    it('Se o retorno padrão é 20', () => {
      math.subtrair = jest.fn().mockReturnValue(20);
      expect(math.subtrair()).toBe(20);
    });

    it('Se a função é modificada', () => {
      math.subtrair = jest.fn((a, b) => (a - b) - (b - a));
      expect(math.subtrair(10, 2)).not.toBe(8);
      expect(math.subtrair(10, 2)).toBe(16);
    });

    it('Se a função é restaurada e retorna undefined', () => {
      math.subtrair.mockReset();
      expect(math.subtrair(10, 2)).toBe(undefined);
    });
  });

  describe('Testando se a função multiplicar', () => {
    it('É chamada', () => {
      math.multiplicar = jest.fn();
      math.multiplicar();
      expect(math.multiplicar).toHaveBeenCalled();
    });

    it('Retorna o valor padrão 10', () => {
      math.multiplicar = jest.fn().mockReturnValue(10);
      expect(math.multiplicar()).toBe(10);
    });
  });

  describe('Testando se a função somar', () => {
    math.somar = jest.fn((a, b) => a + b);
    const sum = math.somar(2, 2);

    it('É chamada', () => {
      expect(math.somar).toHaveBeenCalled();
    });

    it('Retorna a soma de 2 + 2', () => {
      expect(sum).toBe(4);
    });

    it('Retorna true quando os parâmetros são 2 e 2', () => {
      expect(math.somar).toHaveBeenCalledWith(2, 2);
    });
  });

  describe('Testando se a função dividir', () => {
    math.dividir = jest
      .fn()
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5)

    it('Na primeira chamada o retorno é 2', () => {
      expect(math.dividir()).toBe(2);
      expect(math.dividir).toHaveBeenCalledTimes(1);
    });

    it('Na segunda chamada o retorno é 5', () => {
      expect(math.dividir()).toBe(5);
      expect(math.dividir).toHaveBeenCalledTimes(2);
    });

    it('O retorno padrão é 15', () => {
      expect(math.dividir()).toBe(15);
      expect(math.dividir).toHaveBeenCalledTimes(3);
    });
  });
});
