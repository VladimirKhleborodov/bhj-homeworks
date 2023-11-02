let countDown = function() {
  let timer = document.getElementById('timer');
  timer.textContent--;

  if (timer.textContent === '0') {
    alert('Вы победили в конкурсе!');
    clearInterval(counter);
  }
}

let counter = setInterval(countDown, 50);