const button = document.getElementById('tasks__add');

function createTask() {
  const taskTitle = document.createElement('div');
  taskTitle.classList.add('task__title');
  const taskInput = document.getElementById('task__input');
  const taskInputValue = taskInput.value.trim();
  taskTitle.innerText = taskInputValue;

  const hyperlink = document.createElement('a');
  hyperlink.classList.add('task__remove');
  hyperlink.setAttribute('href', '#');
  hyperlink.innerHTML = '&times;';
  hyperlink.addEventListener('click', () => {
    task.remove();
  });

  const task = document.createElement('div');
  task.classList.add('task');
  task.appendChild(taskTitle);
  task.appendChild(hyperlink);

  const tasksList = document.getElementById('tasks__list');
  tasksList.appendChild(task);
}

button.addEventListener('click', () => {
  createTask();
});