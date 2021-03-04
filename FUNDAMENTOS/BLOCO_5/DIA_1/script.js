//header-container
document.getElementById('header-container').style.backgroundColor = 'rgb(66,177,106)';

//emergency-tasks
document.getElementsByTagName('section')[0].style.backgroundColor = 'rgb(252,159,131)';

//emergency-tasks div h3 urgente e importante / urgente e não-importante
let emergencyTasksH3 = document.querySelectorAll('.emergency-tasks div h3');
for (let index = 0; index < emergencyTasksH3.length; index += 1) {
  emergencyTasksH3[index].style.backgroundColor = 'rgb(172,126,243)';
}

//no-emergency-tasks
document.getElementsByTagName('section')[1].style.backgroundColor = 'rgb(249,219,94)';

//no-emergency-tasks div h3 u não-urgente e importante / não-urgente e não-importante
let noEmergencyTasksH3 = document.querySelectorAll('.no-emergency-tasks div h3');
for (let index = 0; index < noEmergencyTasksH3.length; index += 1) {
  noEmergencyTasksH3[index].style.backgroundColor = 'rgb(35,37,37)';
}

//footer
document.querySelector('footer').style.backgroundColor = 'rgb(8,53,52)';