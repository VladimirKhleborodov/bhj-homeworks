const modalWindow = document.getElementById('subscribe-modal');
function getCookie(name) {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    let cookieValue = parts.pop().split(";").shift();
    return cookieValue;
  }
}

if (!getCookie('closed')) {
  modalWindow.classList.add('modal_active');
}

const modalCloseElement = document.getElementsByClassName('modal__close')[0];
modalCloseElement.addEventListener('click', () => { 
  document.cookie = 'closed=' + encodeURIComponent('true');
  
  modalCloseElement.closest('.modal_active').classList.remove('modal_active');
});