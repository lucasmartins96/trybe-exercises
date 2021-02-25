//Exercício Bônus 2: Ordene o array numbers em ordem decrescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      let aux = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = aux;
    }
  }
}

console.log(numbers);