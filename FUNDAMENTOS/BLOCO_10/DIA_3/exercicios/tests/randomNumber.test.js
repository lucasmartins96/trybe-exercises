let { randomNumber } = require('../randomNumber');

describe('randomNumber tests', () => {
  it('Verifica se a função é chamada', () => {
    randomNumber = jest.fn();
    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
  });

  it('Verifica se o retorno padrão é 10', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    expect(randomNumber()).toBe(10);
  });

  it('Verifica se foi chamada 1 vez', () => {
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Verifica se a função foi implementada uma vez para dividir', () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(randomNumber(8, 2)).toBe(4);
    expect(randomNumber(8, 2)).not.toBe(4);
  });

  it('Verifica se a função foi implementada com a multiplicação de 3 números', () => {
    randomNumber = jest.fn((a, b, c) => a * b * c);
    expect(randomNumber(8, 2, 4)).not.toBe(undefined);
    expect(randomNumber(8, 2, 4)).toBe(64);
  });

  it('Verifica se a função foi implementada retornando o dobro do parâmetro', () => {
    randomNumber.mockReset();
    randomNumber = jest.fn((number) => number * 2);
    expect(randomNumber(8)).not.toBe(undefined);
    expect(randomNumber(8)).not.toBe(NaN);
    expect(randomNumber(8)).toBe(16);
  });
});