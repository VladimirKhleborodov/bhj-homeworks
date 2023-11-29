const body = document.querySelector('body');
const hyperlinkArr = [...document.querySelectorAll('.has-tooltip')];

hyperlinkArr.forEach(el => {
  const tooltipElement = document.createElement('span');
  const tooltip = el.insertAdjacentElement('beforeEnd', tooltipElement);
  tooltip.classList.add('tooltip');

  el.addEventListener('click', (event) => {
    event.preventDefault();
    tooltip.classList.add('tooltip_active');
    tooltip.innerText = el.getAttribute('title');
    tooltip.style.position = 'absolute';
    tooltip.style.left = `${el.getBoundingClientRect().x}px`;
    setTimeout(() => tooltip.classList.remove('tooltip_active'), 1000);
  });
});