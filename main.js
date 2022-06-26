const products = [
  {id: 1, image: 'https://via.placeholder.com/200x300/87B9E7FF', title: 'Notebook', price: 2000},
  {id: 2, image: 'https://via.placeholder.com/200x300/87B9E7FF', title: 'Mouse', price: 20},
  {id: 3, image: 'https://via.placeholder.com/200x300/87B9E7FF', title: 'Keyboard', price: 200},
  {id: 4, image: 'https://via.placeholder.com/200x300/87B9E7FF', title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
  return `<div class="product-item">
                <div class="placeholder-img">
                    <img src=${item.image} alt="article">
                </div>
                <div class="product-item-description">
                    <h3 class="product-item-description-h3">${item.title}</h3>
                    <p class="product-item-description-p">${item.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
};
const renderPage = list => {
  const productsList = list.map(item => renderProduct(item));
  console.log(productsList);
  document.querySelector('.products').innerHTML = productsList.join(" "); // innerHTML вызывает матод toString, который автоматически вызывает метод .join(" ,")
};

renderPage(products);