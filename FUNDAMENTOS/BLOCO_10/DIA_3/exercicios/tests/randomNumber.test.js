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
});

describe('Testando implementações', () => {
  it('Mockando função para receber 3 parâmetros e retornar sua multiplicação', () => {
    randomNumber = jest.fn((a, b, c) => a * b * c);
    expect(randomNumber(8, 2, 4)).toBe(64);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(8, 2, 4);
  });

  it('Mockando função que recebe um parâmetro e retorna seu dobro', () => {
    randomNumber.mockReset();
    expect(randomNumber).toHaveBeenCalledTimes(0);
    
    randomNumber = jest.fn((number) => number * 2);

    expect(randomNumber(8)).toBe(16);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(8);
  });
});