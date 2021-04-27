const decode = require('../decode');
const encode = require('../encode');

describe('Testando se as funçoes encode e decode', () => {
  it('São funções', () => {
    expect.assertions(2);
    expect(typeof decode).toBe('function');
    expect(typeof encode).toBe('function');
  })

  it('Retornam o mesmo número de caracteres', () => {
    expect.assertions(2);
    expect(encode('consectetur adipiscing elit')).toHaveLength(27);
    expect(encode('2t31m pr2t35m')).toHaveLength(13);
  })
});

describe('Testando se a função encode', () => {
  it('Converte as vogais "a", "e", "i", "o", "u" em "1", "2", "3", "4", "5", respectivamente', () => {
    expect.assertions(2);
    expect(encode('aeiou')).toBe('12345');
    expect(encode('AEIOU')).toBe('12345');
  });

  it('Não converte qualquer consoante em número', () => {
    expect.assertions(5);
    expect(encode('b')).not.toMatch(/[0-9]/);
    expect(encode('k')).not.toMatch(/[0-9]/);
    expect(encode('r')).not.toMatch(/[0-9]/);
    expect(encode('w')).not.toMatch(/[0-9]/);
    expect(encode('z')).not.toMatch(/[0-9]/);
  });
});

describe('Testando se a função decode', () => {
  it('Converte os números 1, 2, 3, 4 e 5 nas vogais "a", "e", "i", "o", "u", respectivamente', () => {
    expect.assertions(5);
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });

  it('Não converte qualquer dígito que não esteja entre 1 e 5 em quaisquer letras do alfabeto', () => {
    expect.assertions(5);
    expect(decode('0')).not.toMatch(/[a-zA-Z]/);
    expect(decode('6')).not.toMatch(/[a-zA-Z]/);
    expect(decode('7')).not.toMatch(/[a-zA-Z]/);
    expect(decode('8')).not.toMatch(/[a-zA-Z]/);
    expect(decode('9')).not.toMatch(/[a-zA-Z]/);
  });
});