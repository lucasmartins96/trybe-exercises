/**
1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
Modifique a estrutura da função para que ela seja uma arrow function .
Modifique as concatenações para template literals .
 */
function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

/**
2 - faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
 */
const oddsAndEvens = () => {
  const arr = [13, 3, 4, 10, 7, 2];
  for (let nextIndex = 1; nextIndex < arr.length; nextIndex++) {
    for (let currentIndex = 0; currentIndex < nextIndex; currentIndex++) {
      if (arr[nextIndex] < arr[currentIndex]) {
        let aux = arr[nextIndex];
        arr[nextIndex] = arr[currentIndex];
        arr[currentIndex] = aux;
      }
    }
  }
  return `Os números ${arr} se encontram ordenados de forma crescente!`;
}

/*Bônus */
const oddsAndEvensSorted = () => {
  const arr = [13, 3, 4, 10, 7, 2];
  arr.sort((a, b) => a - b);
  return `Os números ${arr} se encontram ordenados de forma crescente!`;
}
console.log(oddsAndEvensSorted());