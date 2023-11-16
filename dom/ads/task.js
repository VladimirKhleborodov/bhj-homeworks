const rotatorCaseCollection = document.querySelectorAll('.rotator__case');
const rotatorCaseArr = [...rotatorCaseCollection];
let count = 0;

const changeRotatorClass = function() {
  rotatorCaseArr.find((element, index) => {
    element.classList.toggle('rotator__case_active', index === count);
  });

  count++;
  if (count === rotatorCaseArr.length) {
    count = 0;
  }
}

setInterval(changeRotatorClass, 1000);