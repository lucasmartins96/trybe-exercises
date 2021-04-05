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

/*
4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
*/
const showObjValues = obj => Object.values(obj);
showObjValues(lesson2);

/*
5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . 
Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . 
Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
*/
const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

/*
6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
*/
const showStudentsAmount = (obj) => {
  let studentsAmount = 0;
  for (const key in obj) {
    studentsAmount += obj[key].numeroEstudantes;
  }
  return studentsAmount;
}
showStudentsAmount(allLessons);

/*
7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
*/
const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));

/*
8 - Crie uma função que verifique se o par (chave / valor) existe na função. 
Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
*/
const verifyPair = (obj, key, value) => (!obj.hasOwnProperty(key)) ? false : (obj[key] === value) ? true : false;
verifyPair(lesson3, 'materia', 'Maria Clara');
