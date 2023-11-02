let cookie = document.getElementById('cookie');
let cookieCounter = document.getElementById('clicker__counter');

function cookieChangeSizes() {
  cookieCounter.textContent++;

  if (cookieCounter.textContent % 2 !== 0) {
    cookie.width = 300;
    cookie.height = 150;
  } else {
    cookie.width = 200;
    cookie.height = 127;
  }
}

cookie.onclick = cookieChangeSizes;