/*
1 - Crie uma função que receba um número e retorne seu fatorial.

Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
*/
const factorial = (number) => {
  let result = number;
  for (let index = number; index > 1; index -= 1) {
    result *= index - 1;
  }
  console.log(result);
}
// factorial(4);
/* Bônus */
const factorialRecursive = (number) => (number === 0) ? 1 : number * factorialRecursive(number - 1);
console.log(factorialRecursive(4));

/*
2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
*/
const longestWord = (phrase) => {
  const words = phrase.split(' ');
  let maxLength = 0;
  let longestWord;
  for (let index = 0; index < words.length; index += 1) {
    if (words[index].length > maxLength) {
      maxLength = words[index].length;
      longestWord = words[index];
    }
  }
  return longestWord;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'