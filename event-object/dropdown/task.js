let buttons = document.querySelectorAll('.dropdown__value');
let buttonsArr = [...buttons];

function toggleClass() {
  this.nextElementSibling.classList.toggle('dropdown__list_active');
}

for (const button of buttonsArr) {
  button.addEventListener('click', toggleClass);
}

let dropdownItems = document.querySelectorAll('.dropdown__item');
let dropdownItemsArr = [...dropdownItems];

function closeList(event) {
  event.preventDefault();
  for (const button of buttonsArr) {
    button.textContent = event.target.textContent;
  }
  
  this.parentElement.classList.remove('dropdown__list_active'); 
}

dropdownItemsArr.forEach(dropdownItem => dropdownItem.addEventListener('click', closeList));