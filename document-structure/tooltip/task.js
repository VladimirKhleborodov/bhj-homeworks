const body = document.querySelector('body');
const hyperlinkArr = [...document.querySelectorAll('.has-tooltip')];

hyperlinkArr.forEach(el => {
  const tooltipElement = document.createElement('span');
  tooltipElement.classList.add('tooltip');
  
  el.addEventListener('click', (event) => {
    event.preventDefault();
    if (el.nextElementSibling.contains(tooltipElement)) {
      tooltipElement.classList.toggle('tooltip_active');
    } else {
      el.insertAdjacentElement('afterend', tooltipElement);
      tooltipElement.classList.add('tooltip_active');
      tooltipElement.innerText = el.getAttribute('title');
      tooltipElement.style.position = 'absolute';
      tooltipElement.style.left = `${el.getBoundingClientRect().x}px`;
    }
  });
});