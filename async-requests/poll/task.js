const pollTitleElement = document.getElementById('poll__title');
const pollAnswersElement = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    let poll = JSON.parse(xhr.responseText);
    let pollTitle = poll.data.title;
    pollTitleElement.textContent = pollTitle;
    let pollAnswers = poll.data.answers;
    let button = [];
    
    for (let i = 0; i < pollAnswers.length; i++) {
      button[i] = document.createElement("button");
      button[i].classList.add("poll__answer");
      button[i].textContent = pollAnswers[i];
      button[i].style.marginRight = "10px";
      pollAnswersElement.appendChild(button[i]);
      
      button[i].addEventListener('click', (event) => {
        event.preventDefault();
        alert("Спасибо, ваш голос засчитан!");
      });
    }
  }
});