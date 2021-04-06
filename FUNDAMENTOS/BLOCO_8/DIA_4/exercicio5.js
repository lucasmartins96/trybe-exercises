
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

/*
5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
*/

function containsA() {
  return names.reduce((acc, name) => {
    const numberLettersA = name.match(/[aA]/g).length;
    return acc + numberLettersA;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);