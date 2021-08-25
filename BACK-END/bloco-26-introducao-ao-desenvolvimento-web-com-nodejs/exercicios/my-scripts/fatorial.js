const readline = require('readline-sync');

const number = readline.questionInt('Informe um número e veja o seu fatorial: ');

if (number < 0) {
  console.log('Número inválido');
} else if (number <= 1) {
  console.log(1);
} else {
  let result = 1;
  for (let index = number; index >= 2; index = index - 2) {
    result *= index * (index - 1);
  }
  console.log(result);
}
