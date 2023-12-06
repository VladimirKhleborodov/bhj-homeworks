const loaderImage = document.getElementById('loader');
const currencyItems = document.getElementById('items');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    loaderImage.classList.remove('loader_active');
    let currencyList = JSON.parse(xhr.responseText).response.Valute;
    
    for (let key in currencyList) {
      let item = document.createElement('div');
      item.classList.add('item');

      let itemCode = document.createElement('div');
      itemCode.classList.add('item__code');
      itemCode.textContent = currencyList[key].CharCode;
      item.appendChild(itemCode);

      let itemValue = document.createElement('div');
      itemValue.classList.add('item__currency');
      itemValue.textContent = currencyList[key].Value;
      item.appendChild(itemValue);

      item.insertAdjacentHTML('beforeEnd', '<div class="item__currency">руб.</div>');

      currencyItems.appendChild(item);
    }
  }
});