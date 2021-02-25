let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 3: Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array
let acumulador = 0;
let media;
for (let i=0; i<numbers.length; i++) {
  acumulador+=numbers[i];
}
media = acumulador/numbers.length;
console.log(media);