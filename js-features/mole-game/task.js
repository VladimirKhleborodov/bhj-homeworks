let deadMoles = document.getElementById('dead');
let lostMoles = document.getElementById('lost');

function newGame() {
  deadMoles.textContent = 0;
  lostMoles.textContent = 0;
}

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for (let index = 1; index < 10; index++) {
  let hole = getHole(index);
  hole.onclick = function() {
    if (hole.className.includes('hole_has-mole')) {
      deadMoles.textContent++;
      checkWin();

    } else {
      lostMoles.textContent++;
      checkLose();
    }
  }
}

function checkWin() {
  if (deadMoles.textContent === '10') {
    alert('Вы выиграли!');
    newGame();
  }
}

function checkLose() {
  if (lostMoles.textContent === '5') {
    alert('Вы проиграли!');
    newGame();
  }
}