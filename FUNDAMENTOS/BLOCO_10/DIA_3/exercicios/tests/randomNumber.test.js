let { randomNumber } = require('../randomNumber');

describe('randomNumber tests', () => {
  it('Testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(randomNumber(8, 2)).toBe(4);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(8, 2);
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