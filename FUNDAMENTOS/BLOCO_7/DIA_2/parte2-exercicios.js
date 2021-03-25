const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*
1 - Crie uma função para adicionar o turno da manhã na lesson2. 
Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
*/
function addProps(obj, newKey, value) {
  obj[newKey] = value;
}
addProps(lesson2, 'turno', 'manhã');

/*
2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
*/
const listObjectKeys = obj => Object.keys(obj);
listObjectKeys(lesson1);

/*
3 - Crie uma função para mostrar o tamanho de um objeto.
*/
const showObjLenght = obj => Object.keys(obj).length;
showObjLenght(lesson3);