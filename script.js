const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 1000},
    {id: 3, title: 'Keyboard', price: 800},
    {id: 4, title: 'Gamepad', price: 500},
];

const renderProduct = (product) =>
    ` <div class="item">
        <div class="item__elements">
            <div class="item__elements__button">
                <button class="item__elements__button_cart" id="buttonItem">
                    <i class="fas fa-shopping-cart"></i>
                    Купить
                </button>
            </div>
            <img class="item__elements__img" src="https://via.placeholder.com/261x280" alt="">
        </div>
        <div class="item__description">
            <p class="item__description__name">${product.title}</p>
            <div class="item__description__own">
                <span class="item__description__own_price">${product.price} у.е.</span>
            </div>
        </div>
    </div>`

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    document.querySelector('.gallery__items').innerHTML = productsList.join('');
}

renderPage(products);