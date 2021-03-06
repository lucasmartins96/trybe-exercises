function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//1- inserir dias no calendário
function insertDaysInCalendar() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.getElementById('days');
  for (const index in dezDaysList) {
    let daysListItem = document.createElement('li');
    daysListItem.className = 'day';
    daysListItem.innerHTML = dezDaysList[index];
    if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
      daysListItem.className = 'day holiday';
    }

    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
      daysListItem.className = 'day friday';
    }

    if (dezDaysList[index] === 25) {
      daysListItem.className = 'day holiday friday';
    }

    daysList.appendChild(daysListItem);
  }
}

insertDaysInCalendar();
//2 - Criando botão "Feriados"
function createHolidayButton(dayString) {
  const btnHoliday = document.createElement('button');
  btnHoliday.innerText = dayString;
  btnHoliday.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(btnHoliday);
}
createHolidayButton('Feriados');

//3 - Adicionando evento no botão Feriados
function updateBackgroundColorHolidays() {
  const arrayHolidays = document.getElementsByClassName('holiday');
  for (let index = 0; index < arrayHolidays.length; index++) {
    if (arrayHolidays[index].style.backgroundColor === 'rgb(238, 238, 238)' || arrayHolidays[index].style.backgroundColor === '') {
      arrayHolidays[index].style.backgroundColor = 'white';
    } else {
      arrayHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}
const btnHoliday = document.getElementById('btn-holiday');
btnHoliday.addEventListener('click', updateBackgroundColorHolidays);

//4 - Criando o botão Sexta-feira
function createFridayButton(dayString) {
  const btnFriday = document.createElement('button');
  btnFriday.innerText = dayString;
  btnFriday.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(btnFriday);
}
createFridayButton('Sexta-feira');

//5 - Adicionando evento no botão sexta-feira
const arraySaveNumberDay = [];
function swapTextInFriday() {
  const arrayFriday = document.getElementsByClassName('friday');
  for (let index = 0; index < arrayFriday.length; index++) {
    const arrayFridayItem = arrayFriday[index];
    if (arrayFridayItem.innerHTML !== 'SEXTOU!') {
      arraySaveNumberDay.push(arrayFridayItem.innerHTML);
      arrayFridayItem.innerText = 'SEXTOU!';
    } 
    else arrayFridayItem.innerText = arraySaveNumberDay[index];
  }
}
const btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', swapTextInFriday);

//6 - Efeito zoom
function dayZoomOn(element) {
  const e = element.target;
  e.style.fontSize = 'xx-large';
}

function dayZoomOff(element) {
  const e = element.target;
  e.style.fontSize = '20px';
}

const arrayLiDay = document.querySelectorAll('.day');
for (let index = 0; index < arrayLiDay.length; index++) {
  arrayLiDay[index].addEventListener('mouseover', dayZoomOn);
  arrayLiDay[index].addEventListener('mouseleave', dayZoomOff); 
}

//7 - Adicionar tarefas no calendário
function createTask(nameTask) {
  const task = document.createElement('span');
  task.innerText = nameTask;
  document.querySelector('.my-tasks').appendChild(task);
}
createTask('Planejar a semana');

//8 - Adiciona legenda colorida da tarefa
function createColorfulCaptionDiv(color) {
  const divTask = document.createElement('div');
  divTask.className = 'task';
  divTask.style.backgroundColor = color;
  document.querySelector('.my-tasks').appendChild(divTask);
}
createColorfulCaptionDiv('red');

//9 - Adiciona a classe selected na div task
const colorfulDiv = document.querySelector('.my-tasks').lastChild;
function isSelectedDiv() {
  let isSelected = '';
  if (colorfulDiv.className === 'task') {
    colorfulDiv.className = 'task selected';
    isSelected = true;
  } else {
    colorfulDiv.className = 'task';
    isSelected = false;
  }
  return isSelected;
}
colorfulDiv.addEventListener('click', isSelectedDiv);

//10 - Adicionando cor da tarefa no dia
