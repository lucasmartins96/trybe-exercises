/*
Desenvolva uma HOF que retorna o resultado de um sorteio. 
Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/
/* const check = (n) => ;

const sorted = (n) => {
  const isSorted = n === Math.ceil(Math.random() * 5);
  if (isSorted) return `Parabéns você ganhou`;
  return `Tente novamente`;
} */
const check = (num1, num2) => (num1 === num2);

const result = (myNumber, action) => {
  const randomNum = Math.ceil(Math.random() * 5);
  return (action(myNumber, randomNum)) ? `Parabéns você ganhou` : `Tente novamente`;
}

console.log(result(3, check));

//TENTAR REFATORAR