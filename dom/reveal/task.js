const revealCollection = document.querySelectorAll('.reveal');
let revealArr = [...revealCollection];

document.addEventListener('scroll', () => {
  revealArr.forEach((element, i) => {
    const {top, bottom} = element.getBoundingClientRect();
    
    console.log(`element ${i + 1} with class 'reveal' - position top: ` + top);
    console.log(`element ${i + 1} with class 'reveal' - position bottom: ` + bottom);
    //console.log(`element ${i + 1} with class 'reveal' - height: ` + `${bottom - top}`);

    if ((top < window.innerHeight) && (bottom > 0)) {
      element.classList.add('reveal_active');
    } else {
      element.classList.remove('reveal_active');
    }
  })
});