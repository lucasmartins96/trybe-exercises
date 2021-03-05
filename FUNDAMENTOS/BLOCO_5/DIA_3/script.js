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