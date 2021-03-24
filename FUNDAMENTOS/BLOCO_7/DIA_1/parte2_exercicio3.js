const button = document.querySelector('button');
const div = document.querySelector('div');
let clickCount = 0;
div.innerText = clickCount;
button.addEventListener('click', () => div.innerText = clickCount += 1);