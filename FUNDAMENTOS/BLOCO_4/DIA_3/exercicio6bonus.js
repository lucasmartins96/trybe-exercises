/*
6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

*/
let number = 37;
let multiples = 0;

for (let index = 0; index <= number; index+=1) {
  if (number%index === 0) {
    multiples+=1;
  }
}

(multiples>2) ? console.log(`O número ${number} não é primo`) : console.log(`O número ${number} é primo`);
