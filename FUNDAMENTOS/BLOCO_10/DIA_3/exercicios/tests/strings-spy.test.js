/*
Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

*/

const strings = require('../strings');

describe('Testando implementações', () => {
  test('Mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    const first = jest
      .spyOn(strings, 'firstFunction')
      .mockImplementation(str => str.toLowerCase());

    expect(first('LUCAS')).toBe('lucas');
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith('LUCAS');

    strings.firstFunction.mockRestore();
    expect(strings.firstFunction('lucas')).toBe('LUCAS');
  });
});