/*
2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
*/
let triangleBase = 5;
let asterisksLine;

for (let line = 0; line < triangleBase; line+=1) {
  asterisksLine = '';
  for (let column = 0; column <= line; column+=1) {
    asterisksLine+='*';
  }
  console.log(asterisksLine);
}