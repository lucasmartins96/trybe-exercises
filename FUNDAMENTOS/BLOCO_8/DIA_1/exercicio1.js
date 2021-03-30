/*
Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada.
Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . 
A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
*/
const hiredPerson = (nomeCompleto) => ({
  fullName: nomeCompleto,
  email: `${nomeCompleto}@trybe.com`, //criar função de substituição
});

const newEmployees = () => {
  const employees = {
    id1: hiredPerson('Lucas'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: hiredPerson('Márcia'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: hiredPerson('Matheus'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};
console.table(newEmployees());

// TENTAR REFATORAR