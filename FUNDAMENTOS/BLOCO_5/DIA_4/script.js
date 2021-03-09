/* let optionsSelectPage = {
  backgroundColor: ['blanchedalmond', 'darkolivegreen', 'lightblue', 'pink', 'white'],
  color: ['black', 'white'],
  fontSize: ['larger', 'medium', 'smaller'],
  lineHeight: ['14', '16', '20', '40'],
  fontFamily: ['Roboto', 'Roboto Slab', 'Open Sans', 'Lato', 'Slabo']
};
const selectArray = document.querySelectorAll('select'); */
window.onload = function () {
  document.body.style.backgroundColor = localStorage.getItem('cor-de-fundo');
  document.body.style.color = localStorage.getItem('color');
  for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphs[index].style.lineHeight = `${localStorage.getItem('line-height')}px`;
  }
  for (let index = 0; index < textPage.length; index += 1) {
    textPage[index].style.fontSize = `${localStorage.getItem('font-size')}`;
  }
}

const inputBackgroundColor = document.getElementById('input-backgroundColor');
const inputColor = document.getElementById('input-color');
const inputLineHeight = document.getElementById('input-lineHeight');
const inputFontSize = document.getElementById('input-fontSize');
const paragraphs = document.querySelectorAll('p');
const textPage = document.querySelector('article').children;

function changeBackgroundColor() {
  document.body.style.backgroundColor = inputBackgroundColor.value;
  localStorage.setItem('cor-de-fundo', inputBackgroundColor.value);
}
inputBackgroundColor.addEventListener('change', changeBackgroundColor);

function changeColorFont() {
  document.body.style.color = inputColor.value;
  localStorage.setItem('color', inputColor.value);
}
inputColor.addEventListener('change', changeColorFont);

function changeFontSize() {
  for (let index = 0; index < textPage.length; index += 1) {
    textPage[index].style.fontSize = `${inputFontSize.value}`;
  }
  localStorage.setItem('font-size', inputFontSize.value);
}
inputFontSize.addEventListener('change', changeFontSize);

function changeLineHeight() {
  for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphs[index].style.lineHeight = `${inputLineHeight.value}px`;
  }
  localStorage.setItem('line-height', inputLineHeight.value);
}
inputLineHeight.addEventListener('change', changeLineHeight);


