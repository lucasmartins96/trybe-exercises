//Exercício Bônus 1: Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

for (let nextIndex = 1; nextIndex < numbers.length; nextIndex++) {
  for (let currentIndex = 0; currentIndex < nextIndex; currentIndex++) {
    if (numbers[nextIndex] < numbers[currentIndex]) {
      let aux = numbers[nextIndex];
      numbers[nextIndex] = numbers[currentIndex];
      numbers[currentIndex] = aux;
    }
  }
}

console.log(numbers);