const cartProducts = document.querySelector('.cart__products');
const quantityControl = [...document.querySelectorAll('.product__quantity-control')];
const productImages = [...document.getElementsByClassName("product__image")];
const productTitle = [...document.getElementsByClassName("product__title")];
const productQuantity = [...document.getElementsByClassName("product__quantity-value")];
const buttonsAddProduct = [...document.querySelectorAll('.product__add')];

// Регулировка количества товара
quantityControl.forEach((element, index) => {
  element.addEventListener('click', () => {
    let productIndex = Math.floor(index / 2);
    if (element.classList.contains('product__quantity-control_inc')) {
      productQuantity[productIndex].textContent = Number(productQuantity[productIndex].textContent) + 1;
    }
    
    if (element.classList.contains('product__quantity-control_dec') && (productQuantity[productIndex].textContent > 1)) {
      productQuantity[productIndex].textContent = Number(productQuantity[productIndex].textContent) - 1;
    }
  });
});

// Отдельный массив, состоящий из выбранных объектов с названием товара и количеством
let productsSelectedArray = [];

buttonsAddProduct.forEach((button, index) => {
  button.addEventListener('click', () => {
    let productList = [...document.getElementsByClassName("cart__product")];
    let productSelectedTitle = productTitle[index].textContent;
    let productSelectedQuantity = Number(productQuantity[index].textContent);
    let productSelected = productsSelectedArray.find(elem => elem.productSelectedTitle === productSelectedTitle);
    
    //Если товара нет, создаем новый
    if (!productSelected) {
      productsSelectedArray.push({ productSelectedTitle, productSelectedQuantity });   
      
      const productCart = document.createElement("div");
      productCart.classList.add("cart__product");
      productCart.dataset.id = productTitle[index].closest(".product").dataset.id;
      
      const productCartImage = document.createElement('img');
      productCartImage.classList.add('cart__product-image');
      productCartImage.setAttribute('src', productImages[index].getAttribute("src"));
      productCart.appendChild(productCartImage);
      
      const productCartCount = document.createElement('div');
      productCartCount.classList.add('cart__product-count');
      productCartCount.innerText = productSelectedQuantity;
      productCart.appendChild(productCartCount);
      
      cartProducts.appendChild(productCart);
      
    // Если товар уже существует в корзине, изменяем его количество 
    } else { 
      let productSelectedIndex = productsSelectedArray.indexOf(productSelected);
      productSelectedQuantity = productsSelectedArray[productSelectedIndex].productSelectedQuantity + productSelectedQuantity;
      // Обновляем данные товара в массиве productsSelected
      productsSelectedArray.splice(productSelectedIndex, 1, { productSelectedTitle, productSelectedQuantity });
      // Обновляем количество в существующем товаре в productList
      productList[productSelectedIndex].firstChild.nextElementSibling.textContent = productSelectedQuantity;
    }
  });
});