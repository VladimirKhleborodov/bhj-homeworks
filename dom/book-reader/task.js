const bookControlCollection = document.querySelectorAll('.font-size');
const bookControlArr = [...bookControlCollection];
const book = document.querySelector('.book');

function removeActiveClass() {
  bookControlArr.forEach(element => {
    element.classList.remove('font-size_active');
  });
}

bookControlArr.forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    if ((element === event.target) && (!element.classList.contains('font-size_small') && !element.classList.contains('font-size_big'))) {
      book.className = 'book';
      removeActiveClass();
      element.classList.add('font-size_active');
    }

    if ((element === event.target) && (element.classList.contains('font-size_small'))) {
      book.className = 'book book_fs-small';
      removeActiveClass();
      element.classList.add('font-size_active');
    }

    if ((element === event.target) && (element.classList.contains('font-size_big'))) {
      book.className = 'book book_fs-big';
      removeActiveClass();
      element.classList.add('font-size_active');
    }
    
  });
});