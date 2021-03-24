const button = document.querySelector('button');
const div = document.querySelector('div');
let clickCount = 0;
div.innerText = clickCount;
button.addEventListener('click', () => {
  clickCount += 1;
  div.innerText = clickCount;
})