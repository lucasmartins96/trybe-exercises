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
});