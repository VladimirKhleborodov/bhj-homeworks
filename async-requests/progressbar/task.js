const progress = document.getElementById('progress');
const file = document.getElementById('file');
const fileName = document.querySelector('.input__wrapper-desc');
const form = document.forms.form;

file.addEventListener('change', () => {
  fileName.textContent = file.value;
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  
  xhr.upload.addEventListener('progress', event => {
    progress.value = event.total / event.loaded;
  });
  
  xhr.addEventListener('loadend', () => {
    if (xhr.status === 201) {
      alert('Success');
    } else {
      alert(`Error ${xhr.status}`);
    }
  });
  
  xhr.send(formData);
});