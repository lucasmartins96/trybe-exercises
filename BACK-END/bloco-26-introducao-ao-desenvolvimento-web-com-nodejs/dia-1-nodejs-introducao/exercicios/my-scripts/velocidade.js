const readline = require('readline-sync');

function velocidade() { 
  const distance = readline.questionInt('Qual a distância? (em metros) ');
  const time = readline.questionInt('Qual o tempo? (em segundos) ');
  const velocity = distance / time;
  
  console.log(`${velocity} m/s`);
}

module.exports = { velocidade };
