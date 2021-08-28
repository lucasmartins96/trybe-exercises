const readline = require('readline-sync');
const { imc } = require('./imc');
const { velocidade } = require('./velocidade');
const { sorteio } = require('./sorteio');
const { calcularFatorial } = require('./fatorial');
const { fibonacci } = require('./fibonacci');

const scripts = ['imc', 'velocidade', 'sorteio'];
const index = readline.keyInSelect(scripts, 'Escolha um programa que deseje executar');

switch (index) {
  case 0:
    imc();
    break;
  case 1:
    velocidade();
    break;
  case 2:
    sorteio();
    break;
  case 3:
    calcularFatorial();
    break;
  case 4:
    fibonacci();
    break;
  default:
    console.log('Bye-bye');
}