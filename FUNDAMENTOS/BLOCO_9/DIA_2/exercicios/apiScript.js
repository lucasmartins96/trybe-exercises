// apiScript.js    
const API_URL = 'https://icanhazdadjoke.com/';

const showJoke = (obj) => {
  const divImg = document.getElementById('img');
  const img = document.createElement('img');
  img.src = `https://icanhazdadjoke.com/j/${obj.id}.png`
  divImg.appendChild(img);
  // document.getElementById('jokeContainer').innerHTML = obj.joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json(response))
    .then(data => showJoke(data));
};

window.onload = () => fetchJoke();  