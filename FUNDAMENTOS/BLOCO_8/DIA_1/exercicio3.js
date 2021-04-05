/*
3 - Crie uma HOF utilizando o conceito de currying . 
Passe como parâmetros a resposta correta (Ex: Gabarito) para uma pergunta e uma resposta a ser validada (Ex: Resposta de uma pessoa). 
Sua HOF deve checar se a resposta enviada pela pessoa usuária é correta. 
Se for, a função retorna true , se não for, a função retorna false .

// Sugestão de respostas a serem validadas.
const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';
*/
const CORRECT_ANSWER = 'higher order function';
const USER_ANSWER = 'HIGHER ORDER FUNCTION';

const checkAnswer2 = (correctAnswer) => (userAnswer) => correctAnswer === userAnswer.toLowerCase();

console.log(checkAnswer2(CORRECT_ANSWER)(USER_ANSWER));
