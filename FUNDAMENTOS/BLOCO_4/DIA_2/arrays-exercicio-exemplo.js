let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe'); //adiciona mais uma tarefa
tasksList.unshift('Escovar os dentes'); //adiciona no início do array
console.log(tasksList);
// ['Escovar os dentes','Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.pop(); //remove a última tarefa
tasksList.shift() //remove a primeira tarefa
console.log(tasksList);
// ['Tomar café', 'Reunião', 'Brincar com o cachorro']

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);
