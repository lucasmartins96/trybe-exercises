/*Exercício Bônus 3:
Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. 
Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 
Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). 
Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. 
Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push

*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let produto = [];
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  (i!=numbers.length-1) ? produto.push(numbers[i]*numbers[i+1]) : produto.push(numbers[i]*2);
}

console.log(produto);