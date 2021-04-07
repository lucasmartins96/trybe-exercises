/*
Fixação Spread

Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .
*/
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maçã', 'Pêra'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'leite em pó', 'chocolate'];

const fruitSalad = (fruit, additional) => {
  console.log(...fruit, ...additional);
};

console.log(fruitSalad(specialFruit, additionalItens));

/*
Fixação default destructuring 
*/
const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const { nationality = 'Brazilian' } = person;

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

/*
Fixação property shorthand 
*/
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude
});

console.log(getPosition(-19.8157, -43.9542));