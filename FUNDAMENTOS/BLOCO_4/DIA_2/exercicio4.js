let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 4: Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"
let accumulator = 0;
let average;
for (let index=0; index<numbers.length; index++) {
  accumulator+=numbers[index];
}
average = accumulator/numbers.length;

(average>20)?console.log('valor maior que 20'):console.log('valor menor ou igual a 20');