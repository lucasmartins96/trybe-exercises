/*
3- Agora inverta o lado do triângulo.

*/
let triangleBase = 5;
let asterisks, blanks;
asterisksLine = '';

for (let line = 0; line < triangleBase; line+=1) {
  asterisks += '*';
  blanks='';
  for (let column = 1; column < triangleBase-line; column+=1) {
    blanks+=' ';
  }
  console.log(blanks+asterisks);
}