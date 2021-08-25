const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const idade = readline.questionInt('Qual sua idade? ');
const msg = `Olá, ${name}! Você tem ${idade} anos de idade!`;

console.log(msg);