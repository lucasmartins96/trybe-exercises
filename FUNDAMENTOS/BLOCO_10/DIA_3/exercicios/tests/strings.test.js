/*
Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
*/
const { firstFunction, secondFunction, thirdFunction } = require('../strings');

jest.mock('../strings', () => ({
  firstFunction: jest.fn((str) => str.toLowerCase()),
  
  secondFunction: jest.fn((str) => str.charAt(str.length - 1)),
  
  thirdFunction: jest.fn((str1, str2, str3) => str1.concat(str2, str3)),
}));


describe('Testando as implementações das funções do arquivo strings', () => {
  test('Verifique se a primeira função retorna a string em caixa baixa', () => {
    expect(firstFunction('LUCAS')).toBe('lucas');
    expect(firstFunction).toHaveBeenCalled();
    expect(firstFunction).toHaveBeenCalledTimes(1);
    expect(firstFunction).toHaveBeenCalledWith('LUCAS');
  });

  test('Verifique se a segunda função retorna a última letra de uma string', () => {
    expect(secondFunction('LUCAS')).toBe('S');
    expect(secondFunction).toHaveBeenCalled();
    expect(secondFunction).toHaveBeenCalledTimes(1);
    expect(secondFunction).toHaveBeenCalledWith('LUCAS');
  });

  test('Verifique se a terceira função retorna três strings concatenadas.', () => {
    expect(thirdFunction('lucas', 'Martins', 'DaSilva')).toBe('lucasMartinsDaSilva');
    expect(thirdFunction).toHaveBeenCalled();
    expect(thirdFunction).toHaveBeenCalledTimes(1);
    expect(thirdFunction).toHaveBeenCalledWith('lucas', 'Martins', 'DaSilva');
  });
});