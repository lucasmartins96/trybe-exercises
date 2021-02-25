let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 3: Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array
let accumulator = 0;
let average;
for (let index=0; index<numbers.length; index++) {
  accumulator+=numbers[index];
}
average = accumulator/numbers.length;
console.log(average);