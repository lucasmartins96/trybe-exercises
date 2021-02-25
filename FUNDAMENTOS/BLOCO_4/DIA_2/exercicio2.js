let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 2: Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado
let accumulator = 0;
for (let index=0; index<numbers.length; index++) {
  accumulator+=numbers[index];
}
console.log(accumulator);