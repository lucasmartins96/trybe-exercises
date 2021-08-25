const readline = require('readline-sync');

function imc() {
  const weight = readline.questionFloat('Qual seu peso? ');
  const height = readline.questionFloat('Qual sua altura? ');
  const imc = weight / (height ** 2);
  let condition = '';
  
  if (imc >= 40) { condition = 'Obesidade graus III e IV'; } 
  else if (imc >= 35) { condition = 'Obesidade grau II'; } 
  else if (imc >= 30) { condition = 'Obesidade grau I'; } 
  else if (imc >= 25) { condition = 'Acima do peso (sobrepeso)';} 
  else if (imc >= 18.5) { condition = 'Peso normal'; } 
  else { condition = 'Abaixo do peso (magreza)'; }
  
  const msg = `IMC: ${imc} \n${condition}`;
  
  console.log(msg);
}

module.exports = { imc };
