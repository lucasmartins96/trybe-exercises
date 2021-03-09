/* let optionsSelectPage = {
  backgroundColor: ['blanchedalmond', 'darkolivegreen', 'lightblue', 'pink', 'white'],
  color: ['black', 'white'],
  fontSize: ['larger', 'medium', 'smaller'],
  lineHeight: ['14', '16', '20', '40'],
  fontFamily: ['Roboto', 'Roboto Slab', 'Open Sans', 'Lato', 'Slabo']
};
const selectArray = document.querySelectorAll('select'); */
const inputBackgroundColor = document.getElementById('input-backgroundColor');
const inputColor = document.getElementById('input-color');
//const inputLineHeight = document.getElementById('input-lineHeight');

function changeBackgroundColor() {
  document.body.style.backgroundColor = inputBackgroundColor.value;
}
document.addEventListener('click', changeBackgroundColor);

function changeColorFont() {
  document.body.style.color = inputColor.value;
}
document.addEventListener('click', changeColorFont);

function changeLineHeight() {
  document.querySelector('section').children.style.lineHeight = inputLineHeight.value;
}
document.addEventListener('click', changeLineHeight);


