const readline = require('readline-sync');

function sorteio () {
  let boolYesOrEmpty =  true;

  while (boolYesOrEmpty) {
    const randomNumber = Math.floor(Math.random() * 11);
    const userNumber = readline.questionInt('Informe um número de 0 a 10 e tente adivinhar o número sorteado: ');
    let message = '';

    if (userNumber === randomNumber) { 
      message = 'Parabéns, número correto!'; 
    }
    else { 
      message = `Opa, não foi dessa vez. O número era ${randomNumber}`; 
    }
    
    console.log(message);
    
    boolYesOrEmpty = readline.keyInYN('Deseja jogar novamente? ');
  }
}

module.exports = { sorteio };
