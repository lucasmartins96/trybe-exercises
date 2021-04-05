//1 Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!') ;
const wakeUp = () => console.log('Acordando!!');

//2 - Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
const haveBreakfast = () => console.log('Bora tomar café!!');

//3 - Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
const sleep = () => console.log('Partiu dormir!!');

//4 - Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das funções de primeira classe que você criou nos exemplos anteriores. Exemplo:
const doingThings = (action) => action();

doingThings(wakeUp);
doingThings(haveBreakfast);
doingThings(sleep);