/*
Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
*/
let squareLength = 5;
let asterisksLine;

for (let line = 0; line < squareLength; line+=1) {
  asterisksLine = '';
  for (let column = 0; column < squareLength; column+=1) {
    asterisksLine+='*';
  }
  console.log(asterisksLine);
}